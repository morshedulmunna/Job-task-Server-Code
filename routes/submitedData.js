import express from "express";
import client from "../db/dbConnect.js";
import { ObjectId } from "mongodb";
const router = express.Router();

const AddCollection = client.db("jobtask").collection("AddedSectors");

// Get All sectors
router.get("/:submitID", async (req, res) => {
  try {
    const item = await AddCollection.findOne({
      _id: ObjectId(req.params.submitID),
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update From Data sectors
router.patch("/:submitID", async (req, res) => {
  //
  console.log(req.body.data);

  try {
    const filter = {
      _id: ObjectId(req.params.submitID),
    };

    const updateDoc = {
      $set: req.body.data,
    };

    const result = await AddCollection.updateOne(filter, updateDoc);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
