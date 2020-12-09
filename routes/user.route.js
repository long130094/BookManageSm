const express = require('express');
const controller = require('../controller/user.controller');
const validationMidleware = require('../middleware/auth.middleware');
const router = express.Router();


router.get('/', controller.index);
//Create
router.get('/create', controller.create);
router.post('/create',validationMidleware.createUserPost, controller.createPost);

//Delete
router.get('/:id/delete', controller.delete);
// Update information for User 
router.get('/:id', controller.update);
router.post('/:id/update', controller.updatePost);
/* 
*/
//demo cookie 


module.exports = router;