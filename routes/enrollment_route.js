const express = require("express");
const router = express.Router();
const enrolmentController = require("../controllers/enrollment_controller");

router.post("/add", enrolmentController.createUser);

router.get("/get-all", enrolmentController.getAllUsers);

router.get("/get-one/:id", enrolmentController.getOneUser);

router.delete("/delete-all", enrolmentController.deleteAllUsers);

router.delete("/delete-one/:id", enrolmentController.deleteUsers);

router.put("/update/:id", enrolmentController.updateUsers);

module.exports = router;