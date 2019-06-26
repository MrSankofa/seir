const sqlite3 = require('sqlite3').verbose();
const data = require('./rawData');

let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
    
    if (err) {
        console.log('error db', err);
    } else {
        console.log('connected to properties db!');
    }
});


db.serialize(() => {

    db.prepare("DROP TABLE regoProperties;")
    .run(err => {
        if (err) {
            console.log(err);
        }
    })
    .finalize((err) => {
        
        if (err) {
            console.log('error dropping table');
        }
    });


    db.prepare("CREATE TABLE regoProperties (price INTEGER NOT NULL, beds INTEGER NOT NULL, baths INTEGER NOT NULL, sqft INTEGER NOT NULL, address TEXT NOT NULL, latitude INTEGER NOT NULL, longitude INTEGER NOT NULL, \"uniqueId \"INTEGER PRIMARY KEY, imgUrl TEXT, walkScore INTEGER NOT NULL, transitScore INTEGER NOT NULL);")
    .run(err => {
        if (err) {
            console.log(err);
        }
    })
    .finalize((err) => {
        if (err) {
            console.log('error creating table');
        }
    });



    var stmt = db.prepare("INSERT INTO regoProperties VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    for (var i = 0; i < data.length; i++) {
        stmt.run(data[i].price, data[i].beds, data[i].baths, data[i].sqft, data[i].address, data[i].latitude, data[i].longitude, data[i].uniqueId, data[i].imgUrl, data[i].walkScore, data[i].transitScore);
    }

    stmt.finalize();


});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Closed the database connection.');
    } 
});

module.exports = db;