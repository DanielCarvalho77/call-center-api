const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/findPeople', PessoaController.findPeople);
router.get('/findOnePeople/:id', PessoaController.findOnePeople);
router.delete('/deleleteOnePeople/:id', PessoaController.deleleteOnePeople);
router.post('/createPeople', PessoaController.createPeople);
router.put('/updatePeople/:id', PessoaController.updatePeople);
router.post('/pessoas/:id/matricula', PessoaController.createMatricuala);
router.get('/pessoas/matricula', PessoaController.findAllMatricula);


module.exports = router;
