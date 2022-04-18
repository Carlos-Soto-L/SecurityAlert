var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
var data = require('../controllers/dataUserController');
var home = require('../controllers/home');
var users = require('../models/user');


/* GET home page. */
router.get('/',controller.user_login);

router.get('/home', home.user_login_verify);
router.post('/verify', controller.user_login_verify);
router.get('/logout', controller.user_logout);
router.post('/addUser', controller.user_register); 
router.get('/data', data.user_data);
router.post('/addDatos', data.data_register);
router.get('/inicio', controller.user_inicio);

router.get('/register', function(req, res, next){
  let data = {
      title: 'Register',
      layout:false
    }

  res.render('register', data);
});

router.get('/mensaje', (req, res) => {
  var calle = "";
  users.find({username:"jorgeManuel"},(err, result)=>{
    console.log(result);
    res.redirect(`https://api.whatsapp.com/send?phone=+52 418 132 6979 &text=Alerta solicito apoyo para la calle ${result[0].calle}`)
  })

})


router.post("/verfotosalerta/:id",(req, res)=>{
  const iduser = req.params.id;
  users.find({_id:iduser},{fotos:1,_id:0},(err, result)=>{
    if (err) {
      console.log("A ocurrido un error ", err.message);
    } else {
      res.render("fotosAlerta",{fotos:result[0].fotos});
    }
  });

});
// function(req, res, next) {
//   let data = {
//     title: 'Ingresar al Sistema',
//     layout:false
//   }

//   res.render('login', data);
// }

module.exports = router;
