const express = require("express");
const connection = require("../config");
const medicaments = express.Router({ mergeParams: true });

medicaments.get("/", (req, res) => {
  const id = Number(req.params.patientId);
  connection.query("SELECT * FROM medicament", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering patient's medicaments");
    } else {
      res.json(results);
    }
  });
});

medicaments.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO medicament SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error when saving medicaments");
    } else {
      res.status(201).send(results);
    }
  });
});

medicaments.put("/:id", (req, res) => {
  const { id } = req.params;
  const formData = req.body;
  connection.query(
    "UPDATE medicament SET ? WHERE id = ?",
    [formData, id],
    (err) => {
      if (err) {
        res.status(500).send("Error when modifying medicaments");
      } else {
        res.sendStatus(202);
      }
    }
  );
});

medicaments.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM medicament WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error when removing medicaments");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = medicaments;
