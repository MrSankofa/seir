var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/neighborhood', { useNewUrlParser: true })

const db = mongoose.connection;

mongoose.Promise = Promise;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', () => { console.log('Connected to db.... Good first step B')});

module.exports.mongoose = mongoose;