const connection = require('./connection.js');

let tableName = 'burgers';



let orm = {

    //selectAll();
    selectAll: function(callback) {
        let queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, (err, result) => {

        });
    },



    //insertOne();
    insertOne: function(callback) {
        let queryString = `SELECT * FROM ${tableName}`;
        
    },



    //updateOne();
    updateOne: function(callback) {
        let queryString = `SELECT * FROM ${tableName}`;
        
    }
};

module.exports = orm;














