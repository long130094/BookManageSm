const express = require('express');
const shortid = require('shortid');
const db = require('../db');


const router = express.Router();


router.get('/', (req, res) => {
    res.render('user/users', {
        users: db.get('users').value()
    });
})
//Create
router.get('/create', (req, res) => {
    res.render('user/createUsers')
});
router.post('/create', (req, res) => {
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");

})
//Delete
router.get('/:id/delete', (req, res) => {
    let id = req.params.id;
    db.get('users')
        .remove({ id: id })
        .write()
    res.render('user/users', {
        users: db.get('users').value()
    });
})
// Update information for User 
router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render("user/updateUsers", {
        user: db.get("users").find({ id: id }).value()
    })

});
router.post('/:id/update', (req, res) => {              
    let id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    db.get('users')
        .find({ id: id })
        .assign({
            name: name,
            age: age
        })
        .write()
    res.render('user/users', {
        users: db.get('users').value()
    });
})
/* 
*/

module.exports = router;