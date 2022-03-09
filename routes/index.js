var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
var data = require('../controllers/dataUserController');
var home = require('../controllers/home');

/* GET home page. */
router.get('/',controller.user_login);
router.get('/home', controller.user_home);
router.post('/verify', controller.user_login_verify);
router.get('/logout', controller.user_logout);
router.post('/addUser', controller.user_register); 
router.get('/data', data.user_data);
router.get('/home', home.user_home);

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
