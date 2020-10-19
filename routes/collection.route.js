const express = require('express');

const { defaults } = require('../db');

const controller = require('../controller/collection.controller');
const { route } = require('./book.route');
const router = express.Router();

router.get('/',controller.index)
router.get('/create', controller.create)
//Create user rent book
router.post('/create', controller.createPost)

module.exports = router;