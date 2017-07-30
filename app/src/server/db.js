const mongoose = require('mongoose');
const dbHost = 'mongodb://localhost:27017/pets';

mongoose.connect(dbHost, {useMongoClient: true});

mongoose.connection.on('connected', () =>{
  console.log('Mongoose connected to ' + dbHost + '!');
});

mongoose.connection.on('error', (error) =>{
  console.log('Mongoose could not connect to ' + dbHost + '. Error: ' + error);
});

mongoose.connection.on('disconnected', () =>{
  console.log('Mongoose disconnected from ' + dbHost + '!');
});

require('./models/user');
require('./models/pet');