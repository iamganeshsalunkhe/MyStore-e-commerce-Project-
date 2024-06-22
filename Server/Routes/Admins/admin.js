const express = require("express");
const db = require("../../db");
const utils = require("../../db");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const router = express.Router();

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const encryptedPassword = crypto.SHA256(password);

  const statement = `select id , firstName, lastName, phone from admins where email = '${email}' and password = '${encryptedPassword}'`;
  db.query(statement, (err, data) => {
    const result = {};
    if (err) {
      result["status"] = "error";
      result["error"] = err;
    } else {
      if (data.length === 0) {
        result["status"] = "error";
        result["error"] = "invalid email or password";
      } else {
        const admin = data[0];
        const token = jwt.sign({ id: admin["id"] }, config.secret);
        result["status"] = "success";
        result["data"] = {
          firstName: admin["firstName"],
          lastName: admin["lastName"],
          token: token,
        };
      }
    }
    res.send(result);
  });
});

module.exports = router;
