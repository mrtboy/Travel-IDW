const mysql = require('mysql');

var myqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'agency'
});

myqlConnection.connect((err) =>{
  if(!err){
    console.log('DB Connection succeded');
  } else {
    console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
  }
})

