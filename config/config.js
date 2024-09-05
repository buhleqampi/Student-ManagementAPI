require("dotenv").config();
const nodemailer = require('nodemailer');


const connectionString = {
  url: process.env.URL,
};

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT, 
  secure: false,
  auth: {
    user: process.env.LOGIN,
    pass: process.env.PASSWORD,
  },
});

module.exports = { connectionString, transporter  };



