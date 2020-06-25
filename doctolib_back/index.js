require("dotenv").config();

const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

const patients = require("./routes/patients.route");
const tips = require("./routes/daily_tips.route");
const positiveIdea = require("./routes/positive_idea.route");
const weight = require("./routes/weight.route");
const glucose = require("./routes/glucose.route");
const medicaments = require("./routes/medicaments.route");

app.use(cors());
app.use(express.json());
app.use("/patients", patients);
app.use("/tips", tips);
app.use("/ideas", positiveIdea);
app.use("/weight", weight);
app.use("/glucose", glucose);
app.use("/medicaments", medicaments);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MediMe API !");
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
