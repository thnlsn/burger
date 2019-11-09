//contains methods we will use to modify ORM for use in database

console.log(`burger`);
//reference to orm in orm.js
const orm = require('../config/orm.js');

let burger = {
    all: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        })
    }
}

module.exports = burger;