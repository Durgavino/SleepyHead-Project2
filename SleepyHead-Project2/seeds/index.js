const sequelize = require('../config/connection');
const whoop = require('../models/sleepyhead');
const dishData = require('./sleepyhead-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await whoop.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

