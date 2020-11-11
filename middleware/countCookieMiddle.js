const db = require("../db");

// var count = 0;
module.exports.countCookie = (req ,res , next) => { 
    // req.cookie = (req.session.views || 0) + 1;
    // res.end(req.session.views + ' views')
    // console.log(req.session.views);
    db.update('count', n => n + 1).write()
    const count = db.get('count').value();
    // console.log('cookies', count);
    next();
}