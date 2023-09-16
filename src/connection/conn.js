const msql = require('mysql2/promise');

const conn = msql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'Users'
})

module.exports = conn;