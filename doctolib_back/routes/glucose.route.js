const express = require("express");
const connection = require("../config");
const {authToken} = require("../middlewares")
const glucose = express.Router();

glucose.get("/", (req, res) => {
  connection.query("SELECT * FROM Glucose", (err, results) => {
    if (err) {
      res.status(500).send("Error when retrieving all blood glucose statement");
    } else {
      res.json(results);
    }
  });
});

glucose.get("/:id", (req, res) => {
  const {id} = req.params;
  connection.query(
    `SELECT * FROM Glucose WHERE id=${id}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when retrieving the blood glucose statement");
      } else {
        res.json(results);
      }
    }
  );
});

glucose.post("/", (req, res) => {
  const formData = req.body;

  connection.query("INSERT INTO Glucose SET ? ", formData, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send("The blood glucose statement has been filled");
    }
  });
});

glucose.put("/:id", (req, res) => {
  const formData = req.body;
  const {id} = req.params;

  connection.query(
    "UPDATE Glucose SET ? WHERE id= ?",
    [formData, id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error when modifying the blood glucose statement");
      } else {
        res.status(202).json(results);
      }
    }
  );
});

glucose.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM Glucose WHERE id=?", [id], (err, results) => {
    if (err) {
      res.status(500).send("Error when removing the blood glucose statement");
    } else {
      res.status(202).json(results);
    }
  });
});

module.exports = glucose;
