const express =require('express');
const shortid = require('shortid');
const db=require('../db');

const router = express.Router();

//create user 
router.get('/',(req,res) => {
    res.render('user/users',{
        users: db.get('users').value()
    });
})

module.exports = router;