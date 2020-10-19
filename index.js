//Use Expess
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port =  3000;


// PUG
app.set('view engine', 'pug');
//Use to read file JSON
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('views', './views')
const bookRoute = require('./routes/book.route')
const userRoute = require('./routes/user.route')
const transaction = require('./routes/collection.route')
app.get('/', (req, res) => {
    res.render("./Home")
});
//Books store - show all books
app.use('/books',bookRoute)
app.use('/users',userRoute)
app.use('/transactions',transaction)

// open port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

