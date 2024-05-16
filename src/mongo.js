const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/basic-login-demo")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB", error);
});

const userSchema = new mongoose.Schema({
    username: { tpye: String, unique: true, required: true },
    password: { tpye: String, unique: true, required: true }
});

const collection = mongoose.model("Collection", userSchema);

module.exports = collection;