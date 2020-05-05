const notesCtrl={}

notesCtrl.getNotes=(req,res) => res.json({message:[]});
notesCtrl.getNote=(req,res) => res.json({title:'title'});
notesCtrl.createNote=(req,res) => res.json({message:'Nota guardada'});
notesCtrl.updateNote=(req,res) => res.json({message:'Nota actualizada'});
notesCtrl.deleteNote=(req,res) => res.json({message:'Nota eliminada'});

module.exports = notesCtrl;