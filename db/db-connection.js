const mysql = require('mysql2')

let connection;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'dondra82',
            database: 'pharmacy'
        })
    }
    return connection;
}

module.exports = getConnection();

