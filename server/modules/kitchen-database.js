const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/kitchen';
mongoose.connect(databaseUrl)

mongoose.connection.on('connected', () => {
  console.log(`successfully connected to ${databaseUrl}`);
})

mongoose.connection.on('error', (error) => {
  console.log('mongoose connection error:', error);
})

module.exports = mongoose;