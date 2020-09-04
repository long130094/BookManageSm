const express = require('express');
const controller = require('../controller/user.controller')
const router = express.Router();


router.get('/',controller.index);
//Create
router.get('/create', controller.create);
router.post('/create', controller.createPost);
//Delete
router.get('/:id/delete', controller.delete);
// Update information for User 
router.get('/:id', controller.update);
router.post('/:id/update', controller.updatePost);
/* 
*/

module.exports = router;