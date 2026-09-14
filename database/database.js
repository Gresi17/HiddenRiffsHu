const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "A JELSZAVAD",
    database: "adatbazis"
});