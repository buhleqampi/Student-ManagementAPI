const jwt = require("jsonwebtoken");
const Educator = require("../models/educator_model");

require("dotenv");

let verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    console.log(decoded);
    req.userId = decoded.educator_id;

    next();
  });
};

let isAdmin = async (req, res, next) => {
  const educator = await Educator.findById(req.educatorId);

  if (educator && educator.roles.includes("admin")) {
    next();
  } else {
    res
      .status(403)
      .json({ error: "You don't have permission to perform this action." });
  }
};
let auth = {
  verifyToken,
  isAdmin,
};

module.exports = auth;
