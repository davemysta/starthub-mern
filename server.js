const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

//CONNECT DB
connectDB();

app.get("/", (req, res) => res.send("Main Page"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));