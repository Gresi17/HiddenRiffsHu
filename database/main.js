import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3300, () => {
    console.log("Sikeres!");
});