require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");

const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server is running http:/localhost:${PORT}`.green.inverse.bold)
);

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
