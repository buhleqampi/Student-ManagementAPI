const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });


  const connectionString = require("./config/db.config")

  // // Connect to MongoDB
  mongoose.connect(connectionString.url);
  
  const db = mongoose.connection;
  
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });

  
app.get("/", (req, res) => {
    res.status(200).send("The server is running.....");
  });
  
  app.use('/email', contactRoutes);
  
  app.listen(port, () => {
    console.log("Listening @ port:", port);
  });


  
  module.exports = app;