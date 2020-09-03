const express = require('express');
const shortid = require('shortid');
const db = require('../db');
const { defaults } = require('../db');


const router = express.Router();

router.get('/',(req,res) => {
    res.render('transaction/viewTransaction', {
        lists: db.get('collection').value(),
        books: db.get("Books").value(),
        users: db.get("users").value()
    })
    
})
//Create user rent book
router.post('/create', (req,res) => {
    req.body.id = shortid.generate();
    db.get("collection").push(req.body).write();
    
    
})

module.exports = router;