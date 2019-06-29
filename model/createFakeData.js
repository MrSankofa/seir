var faker = require('faker');
var andrew = require('../data/rawData');

// console.log(andrew);

var popRawData = function popRawData(index) {
  const rawData = [];
  count = 0;
  const j = index * 1000;
  for(var i = 0; i < 1000; i++) {
    const obj = {};
    obj.uniqueId = i + j;
    obj['price'] = andrew[count].price;
    obj.beds = andrew[count].beds;
    obj.baths = andrew[count].baths;
    obj.sqft = andrew[count].sqft;
    obj.address = andrew[count].address;
    obj.latitude = andrew[count].latitude;
    obj.longitude = andrew[count].longitude;
    obj.imgUrl = andrew[count].imgUrl;
    obj.walkScore = andrew[count].walkScore;
    obj.zoomLevel = Math.floor(Math.random() * 15) + 1;
    obj.transitScore = andrew[count].transitScore; 
    
    
    
    count += 1;
    if ( count === 99) {
      count = 0;
    }
    rawData.push(obj);
  }
  return rawData;
}

module.exports = popRawData;

// var popRawData = function popRawData() {
//   var rawData = [];
  
//   for(var i = 0; i < 1000; i++) {
//     const obj = {};
//     obj['price'] = faker.random.number({
//       'min': 100000,
//       'max': 5000000
//     })
//     obj.beds = faker.random.number({
//       'min': 1,
//       'max': 10
//     })
//     obj.baths = faker.random.number({
//       'min': 0,
//       'max': 5
//     })
//     obj.sqft = faker.random.number({
//       'min': 1,
//       'max': 5000
//     })
//     obj.address = faker.address.streetAddress()
//     obj.latitude = faker.address.latitude()
//     obj.longitude = faker.address.longitude()
//     rawData.push(obj)
//   }
//  return rawData;
// }