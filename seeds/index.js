const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----- DATABASE SYNCED -----');

  await seedUsers();
  console.log('----- USERS SYNCED -----');

  await seedPosts();
  console.log('----- POSTS SYNCED -----');

  await seedComments();
  console.log('----- COMMENTS SYNCED -----');

  process.exit(0);
};

seedAll();