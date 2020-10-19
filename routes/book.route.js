const express = require('express');
const router = express.Router();
const controller = require('../controller/book.controller')

router.get('/', controller.index);
//Create Book
router.get('/create', controller.create);
router.post("/create", controller.createPost);
//Update the title of book
router.get('/:id', controller.update);
router.post('/:id/update', controller.updatePost);
//Delete the book
router.get('/:id/delete', controller.delete);
module.exports = router;