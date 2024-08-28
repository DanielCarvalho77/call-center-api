const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.post('/nivel', NivelController.nivelCreate);
router.get('/nivel', NivelController.findAllNivel);
router.get('/nivel/:id', NivelController.findOneNiveis);
router.delete('/nivel/:id', NivelController.deleteNivel);
router.put('/nivel/:id', NivelController.updateNivel);

module.exports = router;
