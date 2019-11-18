const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    //  Create some rows in your Person and Dish tables here
    //  to interact with your API using the `npm run start:watch`
    //  or `npm run start` commands.
    const [Gary, Tom, Spencer, Victoria, Mark, Kevin, Maria, Anna, Ian] =
    await Promise.all([
        Person.create({name: 'Gary', attending: true}),
        Person.create({name: 'Tom', attending: false}),
        Person.create({name: 'Spencer', attending: true}),
        Person.create({name: 'Victoria', attending: true}),
        Person.create({name: 'Mark', attending: true}),
        Person.create({name: 'Kevin', attending: true}),
        Person.create({name: 'Maria', attending: true}),
        Person.create({name: 'Anna', attending: false}),
        Person.create({name: 'Ian', attending: true}),
    ]);

    const [Fries, Hamburgers,Cheese,Hummus, Dip, Salad, Popcorn, Turkey] = await Promise.all([
            Dish.create({name: 'French Fries', description: 'Good Stuff'}),
            Dish.create({name: 'Hamburgers', description: 'Good Stuff'}),
            Dish.create({name: 'Cheese Plate', description: 'Good Stuff'}),
            Dish.create({name: 'Hummus Dip', description: 'Good Stuff'}),
            Dish.create({name: 'Dip', description: 'Good Stuff'}),
            Dish.create({name: 'Salad', description: 'Meh'}),
            Dish.create({name: 'Popcorn', description: 'Good Stuff'}),
            Dish.create({name: 'Extra Turkey', description: 'Always welcomed!'}),
    ]);
  } catch (e) {
    console.log(e);
  }

  console.log('done seeding and associating!');
}

syncAndSeedDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
