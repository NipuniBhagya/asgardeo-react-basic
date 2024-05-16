const express = require("express");
const app = express();

const collection = require("./mongo");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", async (req, res) => {
    const { username } = req.body;

    try {
        const check = await collection.findOne({ username: username });

        if (check) {
            res.json("exists");
        } else {
            res.json("not exists");
        }

    } catch (error) {
        res.send(error);
    }
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const data = { 
        username: username,
        password: password
    }

    try {
        const check = await collection.findOne({ username: username });

        if (check) {
            res.json("exists");
        } else {
            res.json("not exists");
            await collection.insertMany(data);
        }

    } catch (error) {
        res.send(error);
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 3001");
});