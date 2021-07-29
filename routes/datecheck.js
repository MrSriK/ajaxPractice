var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
    console.log("Inside datecheck GET");
    res.render('datecheck');
});
router.post("/",function (req,res,next){
    console.log("This is POST call");
    console.log(req.body);
    let date=req.body.date;
    console.log("Entered Date: "+date);
    let validator = /\d{2}[-]\d{2}[-]\d{4}/;
    if(date.match(validator)){
        console.log("Date is Correct");
    }
    else{
        console.log("Please enter valid date");
    }
});


module.exports=router;