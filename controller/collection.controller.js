const shortid = require('shortid');
const db = require('../db');

module.exports.create = (req,res) => {
    res.render('transaction/viewTransaction', {
        lists: db.get('collection').value(),
        books: db.get("Books").value(),
        users: db.get("users").value()
    })
    
}
module.exports.createPost =  (req,res) => {
    req.body.id = shortid.generate();
    db.get("collection").push(req.body).write();
    
    
}