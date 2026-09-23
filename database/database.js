const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "HiddenRiffs234",
    database: "hiddenriffs",
});

connection.connect((err) => {
    if (err) {
        console.error("Hiba a MySQL kapcsolódás során: ", err);
        return;
    }
    console.log("Sikeres MySQL kapcsolódás!");
});

module.exports = connection;