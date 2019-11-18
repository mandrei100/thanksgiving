const Sequelize = require('sequelize');
const { db } = require('../connection');

const Dish = db.define('dish', {
    name: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
});

Dish.sync({ force: true});

module.exports = { Dish };