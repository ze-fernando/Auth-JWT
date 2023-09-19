const verify = require('../util/helper');
const route = require('express').Router();
const secretKey = "z5*a5%s9@p0ºz44¨";
const jwt = require('jsonwebtoken');
const db = require('../connection/conn');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(15);

route.post('/login', async (req, res) => {
    const {username, pass} = req.body;
    if (verify({username, pass})) return res.status(400).json({erro: 'Fields cannot be empty'});
    try {
        const sql = `SELECT * FROM users WHERE username = ?`;
        const [rows] = await db.query(sql, [username]);
        if (rows.length > 0) {
            const auth = await bcrypt.compare(pass , rows[3]);
            if (auth){
                const token = jwt.sign({ username: user.username },secretKey, {expiresIn: '30min'});
                console.log(rows)
                res.status(200).json({message: 'Authorized', 'token': token});
            }
        }
        else return res.status(401).json({erro: "Invalid keys"});
    
    } catch (error) {
        console.error(`Erro in server: ${error.message}`);
        res.status(500).json({erro: 'Erro in server'});
    }
})

route.post('/signup', async (req, res) => {
    const {name, username, pass} = req.body;
    if (verify({name, username, pass})) return res.status(400).json({erro: 'Fields cannot be empty'});
    try {
        const hash = bcrypt.hashSync(pass, salt);
        const check = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await db.execute(check, [username]);
        
        if (rows.length > 0) return res.json({erro: 'User aleredy exists'});
        
        const sql = 'INSERT INTO users (name, username, passrowd) VALUES (?, ?, ?)';
        await db.execute(sql, [name, username, hash]);
        return res.status(201).json({message: 'Created sucess'});
    } catch (error) {
        console.error(`Erro in server: ${error.message}`);
        res.status(500).json({erro: 'Erro in server'});
    }
})


module.exports = route;