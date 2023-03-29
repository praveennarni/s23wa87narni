var express = require('express');
var router = express.Router();


/* Interesting fact about me */
router.get('/', function(req, res, next) {
    var num;
    var rand = Math.random();
    console.log(req.query.num);
    num = req.query.num;
//   res.render('mydata', { title: 'Praveen Babu Narni' });

//  req.params()
if(num == undefined){
    num=rand;
}

let cos = Math.acosh(num);
let log = Math.log1p(num);
let tab = Math.tan(num);
let sq = Math.sqrt(num);

res.render('computation',{
    title:'computation',
    values:'Math.acosh() applied to '+num+' is '+cos,
    value1:'Math.log1p() applied to '+num+' is '+log,
    value2:'Math.tan() applied to '+num+' is '+tab, 
    values3:'Math.sqrt() applied to '+num+' is '+sq
});
});



module.exports = router;