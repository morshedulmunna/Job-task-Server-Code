import express from "express";
import client from "../db/dbConnect.js";

const router = express.Router();

// // collection
const sectorsCollection = client.db("jobtask").collection("sectors");
const AddCollection = client.db("jobtask").collection("AddedSectors");

// Get All sectors
router.get("/", async (req, res) => {
  try {
    const items = await sectorsCollection.find({}).toArray();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Product
router.post("/", async (req, res) => {
  const addItem = req.body;
  try {
    const result = await AddCollection.insertOne(addItem);
    res.send({ success: "Form Submit Successfully", result });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
