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
router.get('/data', controller.user_data);
router.post('/addDatos', data.data_register);
router.get('/inicio', controller.user_inicio);

router.get('/register', function(req, res, next){
  let data = {
      title: 'Register',
      layout:false
    }

  res.render('register', data);
});

router.get('/mensaje/:id', (req, res) => {
  const iduser = req.params.id;
  users.find({_id:iduser},(err, result)=>{
    console.log(result);
    if (result[0].numeroint != null) {
      res.redirect(`https://api.whatsapp.com/send?phone=+52 418 132 6979 &text=Alerta solicito apoyo para la calle ${result[0].calle}, en la colonia ${result[0].colonia}, mi numero de casa es ${result[0].numero} y mi numero interior es ${result[0].numeroint} `)
       
    } else {
      res.redirect(`https://api.whatsapp.com/send?phone=+52 418 132 6979 &text=Alerta solicito apoyo para la calle ${result[0].calle}, en la colonia ${result[0].colonia}, mi numero de casa es ${result[0].numero}`)
    }
  })

});

var iduse = "";
router.get("/eliminarfoto/:idfoto",(req, res)=>{
  const idfoto = req.params.idfoto;
  users.findOneAndUpdate({_id:iduse},{$pull:{fotos:idfoto}},(err, result)=>{
    if (err) {
      console.log("A ocurrido un error ",err.message);
    } else {
      res.redirect(`/verfotosalerta/${iduse}`);
    }
  });
});


router.get("/verfotosalerta/:id",(req, res)=>{
  const iduser = req.params.id;
  iduse = iduser;
  users.find({_id:iduser},{fotos:1,_id:1},(err, result)=>{
    if (err) {
      console.log("A ocurrido un error ", err.message);
    } else {
      res.render("fotosAlerta",{fotos:result[0].fotos,iduser:result[0]._id, resultados:result});
    }
  });

});

router.post("/actualizardatos/:id",(req, res)=>{
  const iduser = req.params.id;
  const data = req.body;
  users.updateOne({_id:iduser},{$set:{
    username: data.username,
    password: data.password,
    email: data.email,
    nombre: data.nombre,
    ape: data.ape,
    telefono: data.telefono,
    calle: data.calle,
    numero: data.numero,
    numeroint: data.numeroint,
    colonia: data.colonia,
    ciudad: data.ciudad
  }},(err, result)=>{
    if (err) {
      console.log("A ocurrido un error ", err.message);
    } else {
      res.redirect("/inicio");
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
