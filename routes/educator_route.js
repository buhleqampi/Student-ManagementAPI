const express = require("express");
const router = express.Router();
const educatorController = require('../controllers/educator_controller');


router.post("/add-educator", educatorController.createEducator); 

router.get("/educators", educatorController.getAllEducators);

router.get("/educator/:id", educatorController.getEducator);


 
module.exports = router;