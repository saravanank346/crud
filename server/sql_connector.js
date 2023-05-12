const express =require("express");
app=express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'roshin',
  password : 'roshin@2001',
  database : 'contact'
});
 
connection.connect();
console.log("db connected")
 
connection.query('SELECT * from contactus', function (error, results) {
  if (error);
  console.log('The solution is: ', results);
});
 
connection.end();