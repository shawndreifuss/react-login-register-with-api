const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
 
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
 

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const email = fullName.split(' ')[0];
    const username = fullName.split(' ')[1];

    users.push({
      fullName,
      username,
      email: email + "@test.com",
     password: Math.floor(Math.random() * (99 - 18 + 1) * 10000000)
    });
  }

  await User.collection.insertMany(users);
  

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
