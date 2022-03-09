var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    password: {type: String, required:true},
    nombreCompleto: {type: String, minlength:8, maxlength:50,required:true},
    curp: {type:String},
    email: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    domicilio: {type:String},
    codigoPostal: {type: String},
    ciudad: {type:String},
    telefono: {type: Number},
});

module.exports = mongoose.model('dataUser', UserSchema);