const shortid = require('shortid');
const db = require('../db');

module.exports.index = (req, res) => {
    res.render('user/users', {
        users: db.get('users').value()
    });
};
module.exports.create = (req, res) => {
    res.render('user/createUsers')
};

module.exports.createPost =  (req, res) => {
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");
};
module.exports.delete = (req, res) => {
    let id = req.params.id;
    db.get('users')
        .remove({ id: id })
        .write()
    res.render('user/users', {
        users: db.get('users').value()
    });
}
module.exports.update = (req, res) => {
    let id = req.params.id;
    res.render("user/updateUsers", {
        user: db.get("users").find({ id: id }).value()
    })

};
module.exports.updatePost = (req, res) => {              
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
}