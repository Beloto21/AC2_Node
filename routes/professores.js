const express = require('express');
const router = express.Router();
const controller = require('../controllers/professoresController');

router.get('/', controller.listarProfessores);
router.get('/:id', controller.buscarProfessorPorId);
router.get('/:id/turmas', controller.listarTurmasDoProfessor);
router.put('/:id', controller.atualizarProfessor);
router.post('/:id/turmas', controller.adicionarTurma);
router.get('/departamento/:departamento', controller.listarPorDepartamento);
router.delete('/:id', controller.removerProfessor);

module.exports = router;