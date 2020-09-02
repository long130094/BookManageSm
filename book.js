//Use Expess
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

//Generate random ID:
const shortid = require('shortid')
// PUG
app.set('view engine', 'pug');
//Use to read file JSON
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('views', './views')
//use lowDB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults (required if your JSON file is empty)
db.defaults({ Books: [] })
    .write()
// Home page
app.get('/', (req, res) => {
    res.render("./Home")
});
//Books store - show all books
app.get('/books', (req, res) => {
    res.render("book/books", {
        books: db.get('Books').value()
    })
});
//Create Book
app.get('/books/create', (req, res) => {
    res.render("book/createBook");
});
app.post("/books/create", (req, res) => {
    req.body.id = shortid.generate();
    db.get("Books").push(req.body).write();
    res.redirect("/books");

});
//Update the title of book
app.get('/books/:id', (req, res) => {
    let id = req.params.id;
    res.render("book/UpdateBook", {
        book: db.get("Books").find({ id: id }).value()
    })

});
app.post('/books/:id/update', (req, res) => {
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
app.get('/books/:id/delete', (req, res) => {
    let id = req.params.id
    db.get('Books')
        .remove({ id: id })
        .write()
    res.render('book/books', {
        books: db.get('Books').value()
    });


});
// open port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

