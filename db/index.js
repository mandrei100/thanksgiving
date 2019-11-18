const { db } = require('./connection');
const { Dish } = require('./models/Dish');
const { Person } = require('./models/Person');
console.log("Let's look at these", db, Dish, Person);
// Create your associations here!
Person.belongsTo(Dish);
Dish.hasMany(Person);


module.exports = {
  db,
  Dish,
  Person,
};
