const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Siva@123",
    database: "portfolio_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err);
        return;
    }
    console.log("MySQL Connected");
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error");
        }

        res.send("Message Saved Successfully");
    });
});

app.get("/projects", (req, res) => {

    db.query("SELECT * FROM projects", (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Error");
        }

        res.json(result);

    });

});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});