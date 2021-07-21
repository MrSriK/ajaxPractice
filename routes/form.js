var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
    console.log("Inside Form GET");
    //res.render('registration');
    res.render('registration');
});
router.post("/", function (req, res, next) {
    console.log("This is post call");
    console.log(req.body);
    let fname = req.body.fname;
    console.log("Name: " + fname);
    let passwd = req.body.passwd;
    console.log("Password: " + passwd);
    let gender = req.body.gender;
    console.log("Gender: " + gender);
    let agegroup = req.body.agegroup;
    console.log("Age Group: " + agegroup);
});
module.exports = router;