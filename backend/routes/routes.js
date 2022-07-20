import express from "express";
import { Post } from "../db.js";
import {getusertocsv} from "../getusertocsv.js";
const router = express.Router();

//Post Method
router.post("/post", (req, res) => {
  //   console.log(req.body.user_id);
  const data = new Post({
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_gender: req.body.user_gender,
    user_status: req.body.user_status,
  });
  console.log(data);

  try {
    const dataToSave = data.save();
    res.status(200).json({ requestBody: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Update by ID Method
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Post.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get the data to csv
router.get("/download",async (req, res) => {
  const fields = [
    {
      label: 'User Name',
      value: 'user_name'
    },
    {
      label: 'Email',
      value: 'user_email'
    },
    {
     label: 'Gender',
      value: 'user_gender'
    }
    ,
    {
     label: 'Status',
      value: 'user_status'
    }
  ];
  const data = await Post.find();

  return getusertocsv(res, 'users.csv', fields, data);
 })

export default router;
