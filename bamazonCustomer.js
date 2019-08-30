import { rootCertificates } from "tls";

var require("mysql");

var connection =mysql.createConnection({
    host:"localhost",
    port:3306, 
    user:"root",
    password:"jingle2849",
    database: "bamazon"


});

connection.connect(function(err) {
    if(err) throw err; 
}