const express = require('express');

const { defaults } = require('../db');

const controller = require('../controller/collection.controller')
const router = express.Router();

router.get('/', controller.create)
//Create user rent book
router.post('/create', controller.createPost)

module.exports = router;