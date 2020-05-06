const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true, // Propiedad de Mongoose que quita los espacios en blanco tanto adelante de la palabra o al final
        unique:true // Propiedad que el username esa unico
    }
},{
    timestamps:true
});

module.exports = model('User',userSchema);