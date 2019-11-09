//this file will hold all mysql connection data

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JoeKerr!',
    database: 'burgers_db'
});

connection.connect((err) => {
    if(err) throw(err);
    console.log(`Connected as ID: ${connection.threadId}`);
});

//exporting the basic mysql connection to orm.js
module.exports = connection;






















/* var mysql = require("mysql");

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

module.exports = connection; */