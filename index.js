import express from "express";
import cors from "cors";
import client from "./db/dbConnect.js";
const app = express();
import dotenv from "dotenv";

// All Route Import
import sectorsRouters from "./routes/sectors.js";
import submitedData from "./routes/submitedData.js";

// Require ==========>
dotenv.config();

// Require ==========>
const PORT = process.env.PORT || 5000;

// Middle-Ware
app.use(cors());
app.use(express.json());

const run = async () => {
  try {
    // Connect DataBase
    await client.connect();

    // Router
    app.use("/sectors", sectorsRouters);
    app.use("/submitedData", submitedData);
    //
  } finally {
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Runnig Server");
});

app.listen(PORT, () => {
  console.log("server is running port", PORT);
});
