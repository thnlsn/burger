const connection = require('./connection.js');

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

module.exports = orm;














