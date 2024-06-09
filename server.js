const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.send("admin module");
});

const db = require("./models");
db.mongoose.connect (db.url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
        })
        .then(() => {
            console.log("Connected to the database");
        })
        .catch(err => {
            console.log("Cannot connect to the database", err);
            process.exit();
        });

    require("./routes/driver.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Running in Port ${PORT}`);
});