import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin123",
    database: "database"
});

module.exports = connection;