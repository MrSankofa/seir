const popRawData = require('../createFakeData.js');


const rawData = popRawData();
console.log('rawData: ', rawData[0]);

const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const csvWriter = createCsvWriter({  
  path: 'updated.csv',
  header: [
    {id: 'uniqueId', title: 'uniqueId'},
    {id: 'price', title: 'price'},
    {id: 'beds', title: 'beds'},
    {id: 'baths', title: 'baths'},
    {id: 'sqft', title: 'sqft'},
    {id: 'address', title: 'address'},
    {id: 'latitude', title: 'latitude'},
    {id: 'longitude', title: 'longitude'},
    {id: 'imgUrl', title: 'imgUrl'},
    {id: 'walkScore', title: 'walkScore'},
    {id: 'zoomlevel', title: 'zoomlevel'},
    {id: 'transitScore', title: 'transitScore'},
  ]
});

var count = 0;
let id = 0;
var loop = function(popRawData) {
  count++
  id++;
  if ( count >= 10001 ) {
    return
  } else {
    csvWriter  
      .writeRecords(popRawData())
      .then(()=> { 
        loop(popRawData);
      });
  }
}
console.time('creating csv')
loop(popRawData);
console.timeEnd('creating csv')


// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: __dirname,
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANGUAGE'}
//     ]
// });
 
// const records = [
//     {name: 'Bob',  lang: 'French, English'},
//     {name: 'Mary', lang: 'English'}
// ];
 
// csvWriter.writeRecords(records)
//     .then(() => {
//         console.log('...Done');
//     }).catch((error) => {
//       console.error(error);
//     });

// const { convertArrayToCSV } = require('convert-array-to-csv');
// // const converter = require('convert-array-to-csv');
 
// const header = ['number', 'first', 'last', 'handle'];
// const dataArrays = [
//   [1, 'Mark', 'Otto', '@mdo'],
//   [2, 'Jacob', 'Thornton', '@fat'],
//   [3, 'Larry', 'the Bird', '@twitter'],
// ];
// const dataObjects = [
//   {
//     number: 1,
//     first: 'Mark',
//     last: 'Otto',
//     handle: '@mdo',
//   },
//   {
//     number: 2,
//     first: 'Jacob',
//     last: 'Thornton',
//     handle: '@fat',
//   },
//   {
//     number: 3,
//     first: 'Larry',
//     last: 'the Bird',
//     handle: '@twitter',
//   },
// ];
 
// /*
//   const csvFromArrayOfObjects  = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';
// */
// const csvFromArrayOfObjects = convertArrayToCSV(dataObjects);
// console.log('csvFromArrayOfObjects: ', csvFromArrayOfObjects);
 
// /*
//   const csvFromArrayOfArrays  = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
// */
// const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
//   header,
//   separator: ';'
// });



// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:root@example.com:5432/dbname');

// class User extends Sequelize.Model {}
// User.init({
//   username: Sequelize.STRING,
//   birthday: Sequelize.DATE
// }, { sequelize, modelName: 'user' });

// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });