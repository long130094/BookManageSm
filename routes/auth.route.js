const express = require('express');
const controller = require('../controller/auth.controller')
// const validation = require('../validation/user.validate');
const router = express.Router();


router.get('/login',controller.login);
router.post('/login',controller.postLogin);
module.exports = router;


