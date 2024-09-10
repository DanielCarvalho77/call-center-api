const { Router } = require('express');
const CaseController = require('../controllers/CaseController');

const router = Router();

router.post('/ticket/:ticketId/case', CaseController.createCase);
router.get('/ticket/:ticketId/cases', CaseController.findAllCasesByTicket);
// router.get('/case/:id', CaseController.findCaseById);
// router.put('/case/:id/ticket/:ticketId', CaseController.updateCase);
// router.delete('/deleleteOnePeople/:id', PessoaController.deleleteOnePeople);
// router.post('/pessoas/:id/matricula', PessoaController.createMatricuala);
// router.get('/pessoas/matricula', PessoaController.findAllMatricula);

module.exports = router;
