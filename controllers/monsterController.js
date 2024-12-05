const Monster = require('../models/monsterModel');

const monsterController = {
    createTable: (req, res) => {
        Monster.createTable();
        res.send("Table created or already exists.");
    },
    insertMonster: (req, res) => {
        const monster = req.body;
        Monster.insert(monster, (err) => {
            if (err) return res.status(500).send(err.message);
            res.send("Monster added successfully.");
        });
    },
    getAllMonsters: (req, res) => {
        Monster.getAll((err, rows) => {
            if (err) return res.status(500).send(err.message);
            res.json(rows);
        });
    },
    updateMonster: (req, res) => {
        const id = req.params.id;
        const monster = req.body;
        Monster.update(id, monster, (err) => {
            if (err) return res.status(500).send(err.message);
            res.send("Monster updated successfully.");
        });
    },
    deleteMonster: (req, res) => {
        const id = req.params.id;
        Monster.delete(id, (err) => {
            if (err) return res.status(500).send(err.message);
            res.send("Monster deleted successfully.");
        });
    }
};

module.exports = monsterController;