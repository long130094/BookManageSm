const db = require('../db')
module.exports.requireAuth = (req , res, next) =>{
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }
    const user = db.get('users').find({id: req.cookies.userId}).value();
    // console.log(db.get('users').find({id: req.cookies.userId}).value());
    if (!user) { 
        res.redirect('/auth/login');
        return;
    }
    
    next();
}
module.exports.createUserPost = (req , res, next) => {
    const errors = [];
    if(!req.body.name){
        errors.push('Name is required');
        
    }
    if(req.body.name.length>30){
        errors.push('Name has 30 character maximum')
    }
    if(!req.body.age){
        errors.push('age is required');
        
    }
    //check number
    if(isNaN(req.body.age)){
        errors.push('fill the number');
    }
    if(errors.length){
        res.render('user/createUsers',{
            errors: errors,
            values: req.body
        });
        return
    }
    next();
};