// const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

require('dotenv').config()

const studentRoutes= require('./routes/student_route');
const educatorRoutes = require('./routes/educator_route');
const autheticationRoutes = require('./routes/auth_route');

app.use('/students', studentRoutes);
app.use('/educators', educatorRoutes);
app.use('/auth', autheticationRoutes);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

  // Connect to MongoDB

const connectionString = require("./config/config");
mongoose.connect(connectionString.url);

const db = mongoose.connection;
  
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
  });

app.get("/", (req, res) => {
    res.status(200).send("The server is running.....");
  });

  
app.listen(port, () => {
    console.log("Listening @ port:", port);
  });


  
module.exports = app;