const express = require("express");
const connection = require("../config");
const patient = express.Router();
const medidoc = require("./medidoc.route");

patient.use("/:patientId/medidocs", medidoc);

patient.get("/", (req, res) => {
  connection.query("SELECT * FROM patient", (err, results) => {
    if (err) {
      res.status(500).send("Error when recovering patients");
    } else {
      res.json(results);
    }
  });
});

patient.get("/:patientId", (req, res) => {
  const { patientId } = req.params;
  connection.query(
    `SELECT * FROM patient WHERE id = ${patientId}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when recovering patients");
      } else {
        res.json(results);
      }
    }
  );
});

patient.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO patient SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error when saving patients");
    } else {
      res.status(201).send("Patient created");
    }
  });
});

patient.put("/:patientId", (req, res) => {
  const { patientId } = req.params;
  const formData = req.body;
  connection.query(
    "UPDATE patient SET ? WHERE id = ?",
    [formData, patientId],
    (err) => {
      if (err) {
        res.status(500).send("Error when modifying patient");
      } else {
        res.sendStatus(202);
      }
    }
  );
});

patient.delete("/:patientId", (req, res) => {
  const patientId = req.params.patientId;
  connection.query("DELETE FROM patient WHERE id = ?", [patientId], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error when removing patient");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = patient;
