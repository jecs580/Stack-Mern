// Rutas de notas
const {Router} = require('express');

const router =Router();
router.route('/').get((req,res)=> res.send('Respuestas para las notas'))
// .post()
// router.route('/:id')
//     .get()
//     .put()
//     .delete()
module.exports = router;