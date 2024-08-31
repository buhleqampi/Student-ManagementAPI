const express = require("express")
const router = express.Router()
const user = require('../controllers/auth_user_controller')
// const auth = require('../middleware/auth.middleware')


router.post('/register',user.signup)
router.post('/signin', user.login)


module.exports = router