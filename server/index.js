const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
var cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(express.static(path.resolve(__dirname, "./dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listenening on PORT : ${port}`);
});
