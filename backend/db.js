import mongoose from "mongoose";
const uri =
  "mongodb+srv://userdata:userdata@cluster0.gsfjc.mongodb.net/userdata?retryWrites=true&w=majority";

export function dbconnect() {
  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}

const postUserSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_gender: {
    type: String,
    required: true,
  },
  user_status: {
    type: String,
    required: true,
  },
});
export const Post = mongoose.model("Post", postUserSchema);
