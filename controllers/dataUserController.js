var User = require('../models/datos');
const { body,validationResult } = require('express-validator');
const res = require('express/lib/response');

exports.user_data = function(req, res) {
    res.render('userDates', {title: 'Ingresar a datos' , layout:false})
};


exports.data_register = [
    body('username','Usuario es requerido').trim().isString().escape(),
    body('nombre', 'Nombre es requerido').trim().isString().escape(),
    body('ape', 'Apellido es requerido').trim().isString().escape(),
    body('calle','Calle es requerida').trim().isString().escape(), 
    body('colonia','Colonia es requerida').trim().isString().escape(), 
    body('codigoPostal','Cp es requerida').trim().escape(), 
    body('ciudad','Ciudad es requerida').trim().isString().escape(), 
    body('telefono','Estado es requerida').trim().escape(), 

    (req, res, next) => {
        console.log('Actualizando datos');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let data = {
                title: 'Registro de Datos',
                messages: errors.array()
            };
            res.render('userDates', data);
            return;
        } else {
            console.log('Registrando datos');
            let user = new User({
                username: req.body.username,
                nombre: req.body.nombre,
                ape: req.body.ape,
                calle: req.body.calle,
                colonia: req.body.colonia,
                codigoPostal: req.body.codigoPostal,    
                telefono: req.body.telefono
            });

            user.save(function(error){
                if (error) { return next(error); }
                res.render('index');
            });
        }
    }
];