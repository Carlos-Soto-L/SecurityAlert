var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
var data = require('../controllers/dataUserController');
var home = require('../controllers/home');

/* GET home page. */
router.get('/',controller.user_login);

router.get('/home', home.user_login_verify);
router.post('/verify', controller.user_login_verify);
router.get('/logout', controller.user_logout);
router.post('/addUser', controller.user_register); 
router.get('/data', data.user_data);
router.post('/addDatos', data.data_register);

router.get('/register', function(req, res, next){
  let data = {
      title: 'Register',
      layout:false
    }

  res.render('register', data);
});

// function(req, res, next) {
//   let data = {
//     title: 'Ingresar al Sistema',
//     layout:false
//   }

//   res.render('login', data);
// }

module.exports = router;
