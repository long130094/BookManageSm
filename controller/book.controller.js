const shortid = require('shortid');
const db = require('../db');

module.exports.index = (req, res) => {
    res.render("book/books", {
        books: db.get('Books').value()
    })
}
module.exports.create =  (req, res) => {
    res.render("book/createBook");
};
module.exports.createPost = (req, res) => {
    req.body.id = shortid.generate();
    db.get("Books").push(req.body).write();
    res.redirect("/books");

}
module.exports.update  = (req, res) => {
    let id = req.params.id;
    res.render("book/UpdateBook", {
        book: db.get("Books").find({ id: id }).value()
    })

}
module.exports.updatePost =  (req, res) => {
    let id = req.params.id
    const des = req.body.des;
    console.log(des);
    db.get('Books')
        .find({ id: id })
        .assign({ des: des })
        .write()
    res.render('book/books', {
        books: db.get('Books').value()
    });

}
module.exports.delete =  (req, res) => {
    let id = req.params.id
    db.get('Books')
        .remove({ id: id })
        .write()
    res.render('book/books', {
        books: db.get('Books').value()
    });

    
}

