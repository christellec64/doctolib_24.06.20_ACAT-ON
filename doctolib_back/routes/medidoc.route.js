const express = require("express");
const connection = require("../config");
const medidoc = express.Router({ mergeParams: true });

medidoc.get("/", (req, res) => {
  const id = Number(req.params.patientId);
  const getMedidoc = connection.query(
    `SELECT * FROM medidoc WHERE id_patient = ${id}`,
    (err, results) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json(results);
      }
    }
  );
});

medidoc.get("/:id", (req, res) => {
  const id = req.params.id;
  const patientId = req.params.patientId;
  connection.query(
    `SELECT * FROM medidoc WHERE id=${id} AND id_patient= ${patientId}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error when retrieving the document");
      } else {
        res.json(results);
      }
    }
  );
});

medidoc.post("/", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO medidoc SET ? ", formData, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(201).send("The document has been created");
    }
  });
});

medidoc.put("/:id", (req, res) => {
  const formData = req.body;
  const id = req.params.id;
  connection.query(
    "UPDATE medidoc SET ? WHERE id= ?",
    [formData, id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error when modifying the document");
      } else {
        res.status(202).json(results);
      }
    }
  );
});

medidoc.delete("/:id", (req, res) => {
  const id = req.params.id;
  connection.query("DELETE FROM medidoc WHERE id=?", [id], (err, results) => {
    if (err) {
      res.status(500).send("Error when removing the document");
    } else {
      res.status(202).json(results);
    }
  });
});

module.exports = medidoc;
