require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const pg = require('pg');

const DATABASE = process.env.DATABASE || 'seir';
const PASSWORD = process.env.PASSWORD || 'root';

// development
const config = {
    user: 'postgres', //this is the db user credential
    database: 'seir',
    password: 'root',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000,
};

var awsTable = 'neighborhood'


const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});


var psqlOnChange = (req, res, bounds) => {
  console.log('bounds: ', bounds);
  console.log('bounds fixed ', bounds.se.lat);
  console.log(`SELECT * FROM ${awsTable} where (latitude > ${(bounds.sw.lat).toFixed(4)} and latitude < ${(bounds.se.lat).toFixed(4) + 1}) and (longitude > ${(bounds.sw.lng).toFixed(4)} and longitude < ${(bounds.nw.lng).toFixed(4)}) limit 10 `);
  var swLat = Math.floor((bounds.sw.lat).toFixed(4))
  var seLat = (bounds.se.lat).toFixed(4) + 1.0000
  var swLng = Math.floor((bounds.sw.lng).toFixed(4))
  var seLng = (bounds.se.lng).toFixed(4) + 1.0000;
  console.log(`SELECT * FROM neighborhood where (latitude > ${swLat} and latitude < ${seLat}) and (longitude > ${swLng} and longitude < ${seLng}) limit 100 `);
  var query = `SELECT * FROM ${awsTable} where (latitude > ${swLat} and latitude < ${seLat}) and (longitude > ${swLng} and longitude < ${seLng}) limit 100 `;
  
  pool.query(query)
  .then((data) => {
    res.send(data.rows)
    res.sendStatus(200)
  })
  .catch((err) => {
    console.log(err);
    // pool.end();
  }); 
}

var psqlRetrieveAll = (req, res) => {
    var getEverything = `SELECT * FROM ${awsTable} limit 100`;
    
    return pool.query(getEverything)
    .then((data) => {
        // console.log('data.rows: ', data.rows);
        res.status(200).send(data.rows)
    })
    .catch((err) => {
      console.log(err);
      // pool.end();
    }); 
}

var psqlRetrieveOne = (req, res) => {
    
  var getOne = 'SELECT * FROM neighborhood WHERE \"uniqueId\" = ' + req.params.id;

  pool.query(getOne)
      .then((data) => {
          res.status(200).send(data.rows)
      })
      .catch((err) => {
          console.log(err);
          // pool.end();
        }); 
}

module.exports.psqlOnChange = psqlOnChange;
module.exports.psqlRetrieveAll = psqlRetrieveAll;
module.exports.psqlRetrieveOne = psqlRetrieveOne;
module.exports.pool = pool;

require('make-runnable');