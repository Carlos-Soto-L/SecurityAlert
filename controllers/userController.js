var User = require('../models/user');
const { body,validationResult } = require('express-validator');

var iduser = "";

exports.user_login = function(req, res) {
    res.render('login', {title: 'Ingresar al sistema' , layout:false})
};

exports.user_register = [
    body('username','Usuario es requerido').trim().isString().escape(),
    body('email','Email es requerido').trim().isEmail().escape(), 
    body('password','Contraseña es requerida').trim().isLength({min:8, max:15}).escape(),
    body('nombre', 'Nombre es requerido').trim().isString().escape(),
    body('ape', 'Apellido es requerido').trim().isString().escape(),
    body('calle','Calle es requerida').trim().isString().escape(), 
    body('colonia','Colonia es requerida').trim().isString().escape(), 
    body('codigoPostal','Cp es requerida').trim().escape(), 
    body('ciudad','Ciudad es requerida').trim().isString().escape(), 
    body('telefono','Estado es requerida').trim().escape(), 
    body('numero','numero de casa es requerido').trim().escape(), 
    body('numeroint','numero de casa es requerido').trim().escape(), 

    (req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log('Error al regitrar');
            let data = {
                title: 'Registro de Usuario',
                messages: errors.array(),
                layout: false
            };
            res.render('register', data);
            return;
        } else {
            console.log('Registrando Usuario');
            let user = new User({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                nombre: req.body.nombre,
                ape: req.body.ape,
                calle: req.body.calle,
                colonia: req.body.colonia,
                codigoPostal: req.body.codigoPostal,    
                telefono: req.body.telefono,
                numero: req.body.numero,
                numeroint: req.body.numeroint
            });

            user.save(function(error){
                if (error) { return next(error); }

                let data= {title: 'Ingresar Sistema' + req.body.username}
                res.render('index', data);
            });
        }
    }
];


exports.user_home = function(req, res) {
    res.send('Despliega pantalla de bienvenida');
};

// exports.user_login_verify = [
//     body('username','Nesecitas un usuario').trim().isLength({min:8, max:15}).escape(),
//     body('password','Nesecitas escribir la contraceña').trim().isLength({min:8, max:15}).escape(),

//     (req, res, next) => {
//         console.log('Ingresando a la validación');
//         const errors = validationResult(req);
//         console.log("usuario" + req.body.username)
//         console.log("contraceña" + req.body.password)

//         if (!errors.isEmpty()) {
//             console.log('hay errores');
//             let data = {
//                 title: 'Ingresando al sistema',
//                 messages: errors.array(),
//                 layout: false
//             };
//             res.render('login', data);    
//         } else {
//             console.log('Bienvenido');
            
//             res.render('index');

//         }
//     }


// ];
exports.user_inicio = function(req, res) {
    const usuario = req.session.usuario;
    console.log('Entrando al inicio');
    User.find({_id:iduser},(err, results)=>{
        if (err) {
            console.log("A ocurrido un error",err.message);
        } else {
            res.render('index', {usuarioid:results[0]._id});
        }
    }); 


};



exports.user_login_verify = function(req, res) {
    let usuario = req.body.username;
    let pass = req.body.password;
    const errors = validationResult(req);

    console.log('Usuario: ' + usuario + " Pass: " + pass);
    
    if (usuario && pass) {
        User.find({'username': usuario, 'password':pass}, function(error, results){
            if (!errors.isEmpty()) {
                console.log('hay errores');
                let data = {
                    title: 'Ingresar al Sistema',
                    message: 'Hubo un error contacte a soporte',
                    layout:false
                }
                res.render('login', data);                
            }

            if (results.length > 0) {
                req.session.usuario = usuario;
                iduser = results[0]._id;
                res.render('index', {title:'Bienvenido',usuarioid:results[0]._id});
            } else {
                let data = {
                    title: 'Ingresar al Sistema',
                    message: 'Usuario o contraseña incorrecto',
                    layout:false
                }
                res.render('login', data);   
            }


        });

    } else {
        let data = {
            title: 'Ingresar al Sistema',
            message: 'Usuario o Contraseña vacío',
            layout: false,
        }
        res.render('login', data);
    }


};



exports.user_logout = function(req, res) {
    req.session.destroy();

    let data = {
        title: 'Ingresar al Sistema',
        layout: false
    }
    res.render('login', data);   

};


exports.user_data = function(req, res) {
    User.find({_id:iduser},(err, reslut)=>{
        if (err) {
            console.log("A ocurrido un error ",err.message);
        } else {
            console.log(reslut);
            res.render('userDates', {users: reslut , layout:false})   
        }
    });

};
