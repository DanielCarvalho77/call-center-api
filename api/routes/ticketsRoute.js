const { Router } = require('express');
const TicketController = require('../controllers/TicketController');

const router = Router();

router.post('/pessoa/:consumerId/product/:productId/ticket', TicketController.createTicket);
router.get('/tickets', TicketController.findAllTickets);
router.get('/tickets/:id', TicketController.findTicketById);
router.put('/pessoa/:consumerId/product/:productId/ticket/:id', TicketController.updateTickets);
// router.delete('/deleleteOnePeople/:id', PessoaController.deleleteOnePeople);
// router.post('/pessoas/:id/matricula', PessoaController.createMatricuala);
// router.get('/pessoas/matricula', PessoaController.findAllMatricula);


module.exports = router;
