var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    //password: {type: String, required:true},
    nombreCompleto: {type: String, minlength:8, maxlength:50,required:true},
    curp: {type:String},
    email: {type:String},
    domicilio: {type:String},
    ciudad: {type:String},
    telefono: {type: Number},
    usuarioConf:[{
        nombreCompletoConf: {type: String, minlength:8, maxlength:50,required:true},
        telefonoConfia: {type: Number}
    }]
});

module.exports = mongoose.model('User', UserSchema);