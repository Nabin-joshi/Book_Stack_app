const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const config = require("config");
// require("dotenv").config();

//DB config
const dbUrl =
  "mongodb+srv://nabin:429013g@cluster0.vlrzs.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //config.get("mongoURL");

//connect db
mongoose.connect(dbUrl, {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});

//Routes
//Users Routes
app.post("/api/users/register", (req, res) => {
  res.send("Register Routes");
});

//User Login
app.post("/api/users/login", (req, res) => {
  res.send("login Route");
});

//Update User
app.put("/api/users/update", (req, res) => {
  res.send("Update User");
});

//Delete user
app.delete("/api/users/:id", (req, res) => {
  res.send("Delete User");
});

//Fetch Users
app.get("/api/users", (req, res) => {
  res.send("Fetch User");
});

//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
