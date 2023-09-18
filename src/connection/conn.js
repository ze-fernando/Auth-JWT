const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'Users'
})

module.exports = conn;