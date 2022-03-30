var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'users'},
    nombre: {type: String, minlength:1, maxlength:50,required:true},
    ape: {type: String, minlength:1, maxlength:50,required:true},
    telefono: {type: Number},
    calle: {type: String},
    colonia: {type:String},
    codigoPostal: {type: String},
    ciudad: {type:String},
    
});

module.exports = mongoose.model('datos', UserSchema);