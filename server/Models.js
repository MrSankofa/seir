const sqlite3 = require('sqlite3').verbose();


var retrieveAll = (req, res) => {
    let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
    
        if (err) {
            console.log('error db', err);
        } else {
            db.all("SELECT * FROM regoProperties;", [], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(rows);
                }
            });
        }
    });    
}
//change
var retrieveOne = (req, res) => {
    let db = new sqlite3.Database(__dirname + '/../properties.db', (err) => {
        if (err) {
            console.log('error db', err);
        } else {
            db.all("SELECT * FROM regoProperties WHERE uniqueId = " + req.params.id, [], (err, property) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(property);
                }
            })
        }
    })
}


module.exports.retrieveAll = retrieveAll;
module.exports.retrieveOne = retrieveOne;