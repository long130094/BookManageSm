const shortid = require('shortid');
const db = require('../db');

module.exports.index = (req,res) =>  {
    res.render('transaction/view', {
        
    });
}

module.exports.create = (req, res) => {
    res.render('transaction/viewTransaction', {
        lists: db.get('collection').value(),
        books: db.get("Books").value(),
        users: db.get("users").value()
    })
    
}
module.exports.createPost =  (req,res) => {
    req.body.id = shortid.generate();
    req.body.isComplete = false;
    // console.log(this.isComplete);
    db.get("collection").push(req.body).write();
    db.get('Books').find({id: req.body.bookID}).assign({isComplete: req.body.isComplete}).write();
     // db.get("Books").push(req.body.isComplete).write();
    res.redirect('/transactions/create');
        
}
//True || False of Transactions
module.exports.isComplete = (req,res) => { 
    let idTransaction = req.params.id;
    const validationIdTransaction = db.get('collection').find({id : req.params.id}).value();
    // const findTran = db.get('collection').value().find(item => item.id = idTransaction );
    // const dbBook = db.get('Books').value().find(item => item.id = findTran.id);
    if(validationIdTransaction) {
    db.get('collection').find({id: idTransaction}).assign({isComplete: true}).write();
    } else {
        res.send({ error: 'Not found' });
        return;
    }
    // db.get('Books').find({id: dbBook.id}).assign({isComplete: true}).write();
    // console.log(db.get('Books').find({id: }).assign({isComplete: true}).write());
    console.log(idTransaction);
    
    res.redirect('/transactions/create');   

}