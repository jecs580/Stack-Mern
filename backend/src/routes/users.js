// Rutas de usuarios
const {Router} = require('express');

const router =Router();

router.route('/')
    .get((req,res)=> res.send('Respuestas para el usuario'))
//     .post()
// router.route('/:id')
//     .get()
//     .put()
//     .delete()
module.exports = router;