const express = require("express");
const connection = require("../config");
const weight = express.Router();

weight.get("/", (req, res) => {
  connection.query("SELECT * FROM weight", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering patient's weight");
    } else {
      res.json(results);
    }
  });
});

weight.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO weight SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error when saving weight");
    } else {
      res.status(201).send("Weight created");
    }
  });
});

weight.put("/:id", (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  connection.query(
    "UPDATE weight SET ? WHERE id = ?",
    [formData, id],
    (err) => {
      if (err) {
        res.status(500).send("Error when modifying weight");
      } else {
        res.sendStatus(202);
      }
    }
  );
});

weight.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM weight WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error when removing weight");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = weight;
