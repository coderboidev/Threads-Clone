const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");

dotenv.config();
const app = express();
connectDB();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(() => {
  console.log(`app is listenening on PORT : ${port}`);
});
