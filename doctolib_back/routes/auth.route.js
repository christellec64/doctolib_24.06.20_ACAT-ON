require("dotenv").config()
const express = require("express");
const jwt = require("jsonwebtoken");

const connection = require("../config")

const router = express.Router();

router.post("/login", (req, res) => {
  const {email, password} = req.body;

  connection.query("SELECT * FROM patient WHERE email = ?", [email], (err, rows) => {
    if (err) throw new Error(err.message);

    const user = rows[0]
    if (password !== user.password) {
      res.status(401).json({
        message: "Wrong password"
      })
    }

    const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET, {
      expiresIn: "24h"
    })

    res.status(200).json({
      token,
      user
    })

  })

  // mon casque a plus de batterie, 30sec


})

router.post("/register")

module.exports = router