const { Router } = require('express');
const CaseController = require('../controllers/CaseController');

const router = Router();

router.post('/ticket/:ticketId/case', CaseController.createCase);
router.get('/ticket/:ticketId/cases', CaseController.findAllCasesByTicket);
router.put('/ticket/:ticketId/case/:caseId', CaseController.updateCase);
// router.delete('/deleleteOnePeople/:id', PessoaController.deleleteOnePeople);
// router.post('/pessoas/:id/matricula', PessoaController.createMatricuala);
// router.get('/pessoas/matricula', PessoaController.findAllMatricula);

module.exports = router;
