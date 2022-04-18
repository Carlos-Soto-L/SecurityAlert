var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String,required:true},
    password: {type: String, required:true},
    email: {type:String},
    nombre: {type: String, minlength:1, maxlength:50,required:true},
    ape: {type: String, minlength:1, maxlength:50,required:true},
    telefono: {type: Number},
    calle: {type: String},
    numero: {type: Number},
    numeroint: {type: Number},
    colonia: {type:String},
    codigoPostal: {type: String},
    ciudad: {type:String},
    fotos:{type:Array}
});

module.exports = mongoose.model('users', UserSchema);