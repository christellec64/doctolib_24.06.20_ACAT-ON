const express = require("express");
const connection = require("../config");
const positiveIdea = express.Router();

positiveIdea.get("/", (req, res) => {
  connection.query("SELECT * FROM positive_idea", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering positive idea");
    } else {
      res.json(results);
    }
  });
});

positiveIdea.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT * FROM positive_idea WHERE id=${id}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when recovering positive idea");
      } else {
        res.json(results);
      }
    }
  );
});

positiveIdea.post("/", (req, res) => {
  const formData = req.body;
  connection.query(
    "INSERT INTO positive_idea SET ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when recovering tips");
      } else {
        res.status(201).send("Tip has been created");
      }
    }
  );
});

positiveIdea.put("/:id", (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  connection.query(
    "UPDATE positive_idea SET ? WHERE id = ?",
    [formData, id],
    (err) => {
      if (err) {
        res.status(500).send("Error when modifying idea");
      } else {
        res.sendStatus(202);
      }
    }
  );
});

positiveIdea.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM positive_idea WHERE id= ?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error when removing a idea");
      } else {
        res.status(202).json(results);
      }
    }
  );
});

module.exports = positiveIdea;
