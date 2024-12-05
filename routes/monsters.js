const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monsterController');

router.post('/create-table', monsterController.createTable);
router.post('/monsters', monsterController.insertMonster);
router.get('/monsters', monsterController.getAllMonsters);
router.put('/monsters/:id', monsterController.updateMonster);
router.delete('/monsters/:id', monsterController.deleteMonster);

module.exports = router;