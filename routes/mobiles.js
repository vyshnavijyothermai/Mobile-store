var express = require('express');
var mongoose = require('mongoose')
var router = express.Router();

/* GET Mobile Json data. */
router.get('/', function(req, res, next) {
    Mobile.find({},function (error,documents) {
        console.log(error);
        console.log(documents);
        res.json(documents);
    });

});
router.post('/', function(req, res, next) {
    var data =req.body;
var mobile=new Mobile({
    "name": data.name,
    "color": data.color,
    "memory":data.memory,
    "price": data.price,
    "image": data.image,
    "isSoldOut":data.isSoldOut,
    "activeTab": data.activeTab
});
mobile.save(function (error,result) {

    console.log(error);
    console.log(result);
    res.json(result);
});
});
var Mobile = mongoose.model('Mobile', {
    "name": String,
    "color": String,
    "memory": String,
    "price": Number,
    "image": String,
    "isSoldOut": Boolean,
    "activeTab": String
});

module.exports = router;

