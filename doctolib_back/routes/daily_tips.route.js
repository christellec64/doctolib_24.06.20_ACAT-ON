const express = require("express");
const connection = require("../config");
const tips = express.Router();

tips.get("/", (req, res) => {
  connection.query("SELECT * FROM daily_tips", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering tips");
    } else {
      res.json(results);
    }
  });
});

tips.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT * FROM daily_tips WHERE id=${id}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when retrieving the tip");
      } else {
        res.json(results);
      }
    }
  );
});

tips.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO daily_tips SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering tips");
    } else {
      res.status(201).send("Tip has been created");
    }
  });
});

tips.put("/:id", (req, res) => {
  const formData = req.body;
  const { id } = req.params;
  connection.query(
    "UPDATE daily_tips SET ? WHERE id= ?",
    [formData, id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error when modifying a tip");
      } else {
        res.status(202).json(results).send("The Tip has been modified");
      }
    }
  );
});

tips.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM daily_tips WHERE id=?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error when removing a tip");
      } else {
        res.status(202).json(results);
      }
    }
  );
});

module.exports = tips;
