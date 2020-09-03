const express =require('express');
const shortid = require('shortid');
const db=require('../db');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("book/books", {
        books: db.get('Books').value()
    })
});
//Create Book
router.get('/create', (req, res) => {
    res.render("book/createBook");
});
router.post("/create", (req, res) => {
    req.body.id = shortid.generate();
    db.get("Books").push(req.body).write();
    res.redirect("/books");

});
//Update the title of book
router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render("book/UpdateBook", {
        book: db.get("Books").find({ id: id }).value()
    })

});
router.post('/:id/update', (req, res) => {
    let id = req.params.id
    const des = req.body.des;
    db.get('Books')
        .find({ id: id })
        .assign({ des: des })
        .write()
    res.render('book/books', {
        books: db.get('Books').value()
    });

});
//Delete the book
router.get('/:id/delete', (req, res) => {
    let id = req.params.id
    db.get('Books')
        .remove({ id: id })
        .write()
    res.render('book/books', {
        books: db.get('Books').value()
    });


});
module.exports = router;