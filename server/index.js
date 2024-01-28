const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
var cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
const allowCors = (fn) => async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
};
app.use(allowCors);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listenening on PORT : ${port}`);
});
