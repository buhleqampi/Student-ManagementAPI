const Assessment = require('../models/asessment_model');

exports.createAssessment = async (req, res) => {
  try {
    const assessment = new Assessment(req.body);
    const savedassessment = await assessment.save();
    res.status(201).json(savedassessment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllAssessments = async (req, res) => {
  try {
    const assessments = await Book.find();
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOneBook = async (req, res) => {
    try {
      const { id } = req.params;
      const assessment = await Assessment.findById(id);
      if (!assessment) {
        return res.status(404).send({ message: "assessment not found" });
      }
      res.json(assessment);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Could not fetch assessment", error: error.message });
    }
  };

 