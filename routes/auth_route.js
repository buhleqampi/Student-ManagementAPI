const express = require("express")
const router = express.Router()
const student = require('../controllers/student_controller')
const auth = require('../middleware/authentication')


// router.post('/register',auth.signup)
// router.post('/signin', auth.login)


module.exports = router