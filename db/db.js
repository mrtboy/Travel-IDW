const mysql = require('mysql');


const myqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agency'
});

myqlConnection.connect((err) => {
  if (!err) {
    console.log('DB Connection succeded');
  } else {
    console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
  }
})

function add(data) {
  var sql = `INSERT INTO a_package (country, city,zip, address, events, transportation, hotel, price) VALUES ('${data.country}', '${data.city}', ${data.zip}, '${data.address}', '${data.event}', '${data.transportation}', '${data.hotel}', ${data.price})`;
  myqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function get(){
  var sql = "SELECT * FROM a_package";
  myqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}


module.exports = {add, get};