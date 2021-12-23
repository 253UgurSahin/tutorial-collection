const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs_dev'
});

db.connect((err) => {
    if (err) { console.error(`Connection error: ${err}`); return; }
});

module.exports = db;