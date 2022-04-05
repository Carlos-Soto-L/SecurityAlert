var Users = require('../models/user');
const { body,validationResult } = require('express-validator');
var User = require('../models/datos');


exports.user_login_verify = [
    body('username','Usuario es requerido').trim().isLength({min:8, max:15}).escape(),
    body('password','Contraseña es requerida').trim().isLength({min:8, max:15}).escape(),

    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);
        console.log(req.body.username)
        console.log("usuario")
        console.log(req.body.password)
        console.log("contraceña")

        if (!errors.isEmpty()) {
            console.log('hay errores');
            let data = {
                title: 'Ingresando al sistema',
                messages: errors.array(),
                layout: false
            };
            res.render('login', data);
            return;
        } else {
            console.log('Bienvenido');
        
            let data= {title: 'Bienvenido', message:'Bienvenido ' + req.body.username}
            res.render('index', data);

        }
    }


];