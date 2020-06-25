const express = require("express");
const connection = require("../config");
const medicament = express.router();

medicament.get("/", (req,res) => {
    connection.query("SELECT")
})
