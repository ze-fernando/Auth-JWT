const verify = require('../util/helper');
const route = require('express').Router();
const secretKey = "z5*a5%s9@p0ºz44¨";
const jwt = require('jsonwebtoken');
const db = require('../connection/conn');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(15);

route.post('/login', async (req, res) => {
    const {username, pass} = req.body;
    const hash = bcrypt.hashSync(pass, salt);
    const sql = `SELECT * FROM users WHERE username = '${username}' AND passrowd = '${hash}'`;

    try {
        const [query] = await db.execute(sql);
    } catch (error) {
        console.log(error);
        return res.status(500).json({'error': 'Error internal'});
    }

    
    if (!user) return res.status(401).json({"error": "Invalid keys"});

    
    const token = jwt.sign({ username: user.username },
        secretKey, {expiresIn: '30min'});

    res.status(200).json({'message': 'Authorized', 'token': token});
})

route.post('/signup', async (req, res) => {
    const data = req.body;
    if (verify(data)) return res.status(400).json({'error': 'Fields cannot be empty'});
    const hash = bcrypt.hashSync(data.pass, salt);
    const sql = `INSERT INTO users (name, username, passrowd) VALUES ('${data.name}', '${data.username}', '${hash}')`;
    
    const [query] = await db.execute(sql);

    return res.status(201).json({'message': 'Created sucess'});
})


module.exports = route;