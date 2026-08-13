require("dotenv").config();

const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/", healthRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
