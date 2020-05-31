let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodeJS_messages'
});
connection.connect((err)=>{
  if(err) {console.log("connection error");throw err;}
  else console.log("connection success");
});
module.exports = connection;