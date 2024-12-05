const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./monsterlist.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

const Monster = {
    createTable: () => {
        const sql = 'CREATE TABLE IF NOT EXISTS monsters(id INTEGER PRIMARY KEY, monster_name TEXT, species TEXT, description TEXT)';
        db.run(sql);
    },
    insert: (monster, callback) => {
        const sql = 'INSERT INTO monsters(monster_name, species, description) VALUES (?, ?, ?)';
        db.run(sql, [monster.monster_name, monster.species, monster.description], callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM monsters';
        db.all(sql, [], callback);
    },
    update: (id, monster, callback) => {
        const sql = 'UPDATE monsters SET monster_name = ?, species = ?, description = ? WHERE id = ?';
        db.run(sql, [monster.monster_name, monster.species, monster.description, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM monsters WHERE id = ?';
        db.run(sql, [id], callback);
    }
};

module.exports = Monster;