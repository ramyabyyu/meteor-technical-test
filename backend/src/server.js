const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const apiResponse = require("./helpers/apiResponse");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Meteor" });
});

app.use(routes);

// Not Found API Routes;
app.use((_, res) => {
  apiResponse.NotFound(res, "API not found");
});

module.exports = app;
