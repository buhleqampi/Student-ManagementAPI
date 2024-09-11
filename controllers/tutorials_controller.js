const Tutorial = require('../models/tutorials');

exports.createTutorial = async (req, res) => {
  try {
    const tutorial = new Tutorial(req.body);
    const savedTutorial = await tutorial.save();
    res.status(201).json(savedTutorial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.status(200).json(tutorials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOneTutorial = async (req, res) => {
    try {
      const { id } = req.params;
      const tutorial = await Tutorial.findById(id);
      if (!tutorial) {
        return res.status(404).send({ message: "Tutorial not found" });
      }
      res.json(tutorial);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Could not fetch tutorial", error: error.message });
    }
  };