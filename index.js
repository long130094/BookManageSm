//Use Expess
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const countCookie = require('./middleware/countCookieMiddle');

//midleware authentication
const authMiddleware = require('./middleware/auth.middleware');

const app = express();
const port = 3000;


//use cookie
app.use(cookieParser());

// PUG
app.set('view engine', 'pug');
//Use to read file JSON
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('views', './views')
const bookRoute = require('./routes/book.route')
const userRoute = require('./routes/user.route')
const transaction = require('./routes/collection.route');
const auth = require('./routes/auth.route');
const { signedCookie, JSONCookies } = require('cookie-parser');

app.use(express.static('public'));

//Books store - show all books
app.use(countCookie.countCookie);

app.get('/', (req, res) => {
    // res.cookie('user-id', 123456);
    // console.log('Cookies: ', req.cookies);
    res.render('./Home')
});
app.use('/books', authMiddleware.requireAuth,bookRoute)
app.use('/users',authMiddleware.requireAuth, userRoute)
app.use('/transactions',authMiddleware.requireAuth,transaction)
app.use('/auth',auth);
// open port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

