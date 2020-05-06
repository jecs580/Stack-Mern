const {Schema, model} = require('mongoose');

// Schema: es la definicion del tipado de los datos
// Model: Objeto que se encarga de las consultas, actualizaciones entre otros.

const noteSchema =new Schema({
    title:String,
    content:{
        type:String,
        required:true
    },
    author:String,
    date:{
        type:Date,
        default:Date.now
    } // Fecha que define cuando se ejecutara la nota.
},{
    timestamps:true // Valor de moongose que permite guardar la fecha de creacion y actualizacion del objeto
});
module.exports = model('Note',noteSchema);