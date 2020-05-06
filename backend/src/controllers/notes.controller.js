const notesCtrl={};
const NoteModel = require('../models/note');
notesCtrl.getNotes=async (req,res) => {
    const notes = await NoteModel.find();
    res.json(notes);
} 
notesCtrl.getNote=async (req,res) => {
    const note = await NoteModel.findById(req.params.id);
    res.json({Note: note});
}
notesCtrl.createNote=async (req,res) => {
    const {title, content, date, author}= req.body;
    const newNote = new NoteModel({
        title:title,
        content:content,
        date:date,
        author:author
    });
    await newNote.save();
    res.json({message:'Nota guardada'});
}
notesCtrl.updateNote=async (req,res) => {
    const noteUpdate = await NoteModel.findOneAndUpdate({"_id":req.params.id},req.body)
    res.json(noteUpdate);
}
notesCtrl.deleteNote=async (req,res) => {
    await NoteModel.findByIdAndDelete(req.params.id);
    res.json({message:'Nota eliminada'});
}

module.exports = notesCtrl;