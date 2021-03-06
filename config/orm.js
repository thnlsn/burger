//this file will hold all the methods we will be able to do with the mysql data
const connection = require('./connection.js');

//
const orm = {
    //cb is a callback used to pass the result from the query into the nest file, burger,js in the MODELS folder
    all: (tableInput, cb) => {
        connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
            if (err) throw (err);
            cb(result)
        })
    },
    
    update: (tableInput, condition, cb) => {
        connection.query(`UPDATE ${tableInput} SET devoured=true WHERE id=${condition};`, (err, result) => {
            if (err) throw (err);
            cb(result);
        })
    }
}

module.exports = orm;







































/* const connection = require('./connection.js');

let tableName = 'burgers';



let orm = {

    //selectAll();
    selectAll: (callback) => {
        let queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, (err, result) => {
            callback(result);
        });
    },

    //insertOne();
    insertOne: (burger, callback) => {
        let queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?,?)`;
        burger.devoured = burger.devoured || 0;

        connection.query(queryString, [burger.burger_name, burger.devoured], function(err, result) {
          callback(result);
        });
    },



    //updateOne();
    updateOne: (burger, callback) => {
        var queryString = `UPDATE ${tableName} SET devoured=? WHERE id=?`;

        connection.query(queryString, [burger.burger_name, burger.id], function(err, result) {
          callback(result);
        });
    }
};

//IM SO CONFUSED
module.exports = orm; */














