const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
var cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
connectDB();

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(allowCrossDomain)
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listenening on PORT : ${port}`);
});
