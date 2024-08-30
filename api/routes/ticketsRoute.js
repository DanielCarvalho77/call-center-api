const { Router } = require('express');
const TicketController = require('../controllers/TicketController');

const router = Router();

router.post('/pessoa/:consumerId/product/:productId/ticket', TicketController.createTicket);
router.get('/tickets', TicketController.findAllTickets);
router.get('/tickets/:id', TicketController.findTicketById);
// router.delete('/deleleteOnePeople/:id', PessoaController.deleleteOnePeople);
// router.put('/updatePeople/:id', PessoaController.updatePeople);
// router.post('/pessoas/:id/matricula', PessoaController.createMatricuala);
// router.get('/pessoas/matricula', PessoaController.findAllMatricula);


module.exports = router;
