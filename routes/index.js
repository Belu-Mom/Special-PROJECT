var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gallery',function(req,res,next){
  res.render('gallery.ejs')
});
router.get('/news',function(req,res,next){
  res.render('news.ejs')
});
router.get('/trivia',function(req,res,next){
  res.render('trivia.ejs')
})
router.post('/fav',function(req,res){
  let name= req.body.name
  let email=req.body.email
  let celebrity=req.body.celebrity
  fs.appendFile('data.txt',`name:${name},email:${email},number:${number}\n`,function(e){
    if(e){
      console.log(e)
    }
    var transporter=nodemailer.createTransport({
      service:'gmail',
      auth: {
        user: 'zeshiezesh658@gmail.com',
        pass:'ezviccdbysorvklg'
      }
});
    var mailOptions={
      from:'dhinchakbollywood@gmail.com',
      to:req.body.email,
      subject:'Successfully Sent Your Choice!',
      text:'Congratulation! You successfully got scammed!'
    };
  })
})
module.exports = router;
