const Employee = require('../../models/employee');

module.exports.showListToReview = (req,res) => {
    Employee.findById(req.user.id).populate('toReview').exec((err,a)=>{
        res.render('showListToReview',{employee:a});
    })
    // res.render('showListToReview',{employee:req.user});
}