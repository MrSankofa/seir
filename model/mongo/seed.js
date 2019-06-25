var { mongoose } = require('./index');
var { popRawData } = require('../createFakeData.js');

// console.log(mongoose);
var houseSchema = new mongoose.Schema({
  price: String,
  beds: Number,
  baths: Number,
  sqft: Number,
  address: String,
  latitude: String
});

var Home = mongoose.model('Home', houseSchema, 'Home');
var count = 0;

const loop = function(err, callback) {
  Home.insertMany(callback(), function(err, docs) {
    console.log('docs: ', docs);
    count++
    console.log('count: ', count);
    if( count >= 10000) {
      console.log('should be the last thing to run');
      return
    } else {

      loop(null, callback)
    }
  })
}

loop(null, popRawData)

module.exports = popRawData;