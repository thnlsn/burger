//first require the mysql module from node
var mysql = require("mysql");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 'me',
    user: 'root',
    password: 'JoeKerr!',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    } else {
        console.log("connected as id " + connection.threadId);
        console.log(`THIS IS CONNECTION.JS ${connection.threadId}`)
    }
});

module.exports = connection;