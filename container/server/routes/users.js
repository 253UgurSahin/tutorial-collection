const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const uniqid = require('uniqid');
const db = require('../config/db');
require('dotenv').config();

// Register
router.post("/register", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!(email && password && first_name && last_name)) { res.status(400).send("All input fields are required"); }

    const emailExists = await DBQuery(`SELECT id, email FROM users WHERE email = ?`, [email])
        .then((rows) => { return rows; });
    if (emailExists.length !== 0) { return res.status(409).send("There is already a user with this email adress!"); }

    let user_id = uniqid();
    let encryptedPassword = await bcrypt.hash(password, 10);

    const response = await DBQuery('INSERT INTO users(id, first_name, last_name, email, password, created_at) VALUES (?,?,?,?,?,?)', [user_id, first_name, last_name, email, encryptedPassword, new Date()]);

    const user = { first_name, last_name, email };
    const token = jwt.sign({ user_id: user_id, email }, process.env.TOKEN_KEY, { expiresIn: "2h" });
    res.status(201).json({ user, token });
});
    
// Login
router.post("/login", (req, res) => {
    // our login logic goes here
});


function DBQuery(query, values) {
    return new Promise((resolve, reject) => {
        db.query(query, values, (err, rows, fields) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

module.exports = router;