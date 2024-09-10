const mongoose = require("mongoose");
const Educator = require("../models/educator_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { request } = require("express");

exports.signup = async (req, res) => {
  const { email, password, roles } = req.body;

  try {
    if (!(email && password)) {
      console.error("User registration failed. All inputs are required!");
      res.send("User registration failed. All inputs are required!");
      return;
    }

    let existingEducator = await User.findOne({ email });

    if (existingEducator) {
      return res.status(400).send({ message: "User already exists" });
    }

    const educator = new Educator({
      email: email,
      password: await bcrypt.hash(password, 10),
      roles: roles || ["user"],
    });

    await educator.save();

    console.log(educator);
    return res.status(200).send({ message: "User created successfully", user });
  } catch (err) {
    console.error("Signup failed:", err);
    res.status(500).send("Signup failed");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    const educator = await Educator.findOne({ email });

    if (!educator) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compare(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Login Credentials",
      });
    }

    const access_token = jwt.sign(
      { educator_id: educator._id, educator_email: educator.email },
      process.env.JWT_SECRET_KEY,
      {
        algorithm: "HS256",
        expiresIn: "5h",
      }
    );

    res
      .status(200)
      .send({ id: educator._id, email: educator.email, token: access_token });
  } catch (err) {
    console.error("Login failed:", err);
    res.status(500).send("Login failed");
  }
};
