const express = require("express");
const router = express.Router();
// const educator = require("../controllers/educator_controller");
// const auth = require("../middleware/authentication");
const auth = require('../controllers/auth_controller')
router.post('/register',auth.signup)
router.post('/signin', auth.login)

module.exports = router;
