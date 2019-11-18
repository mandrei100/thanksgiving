const Sequelize = require('sequelize');
const { db } = require('../connection');

const Person = db.define('person', {
    name: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    attending: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
    }
});

Person.sync({ force: true});

module.exports = { Person };