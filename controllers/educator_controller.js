const Educator = require("../models/educator_model");

exports.createEducator = async (req, res) => {
  const newEducator = new Educator(req.body);
  try {
    const savedEducator = await newEducator.save();
    res.json(savedEducator);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.getAllEducators = async (req, res) => {
  try {
    const educators = await Educator.find();
    res.send(educators);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Could not fetch educators", error: error.message });
  }
};

exports.getEducator = async (req, res) => {
  try {
    const { id } = req.params;
    const educator = await Educator.findById(id);
    if (!educator) {
      return res.status(404).send({ message: "Educator not found" });
    }
    res.json(educator);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Could not fetch educator", error: error.message });
  }
};

exports.updateEducator = async (req, res) => {
  try {
    const updatedEducator = await Educator.updateOne({ _id: req.params.id });
    res.json(updatedEducator);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// exports.deleteAllStudents = async (req, res) => {
//     try {
//         await Student.deleteMany({});
//         res.send({ message: "All students deleted successfully" });
//       } catch (error) {
//         res.status(500).send({ message: "Could not delete recipes", error: error.message });
//       }
//     };

// exports.deleteStudents = async (req, res) => {
//     try {
//       const removedStudent = await Student.deleteOne({ _id: req.params.id });
//       res.json(removedStudent);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   };
