import fetch from "node-fetch";
import { dbconnect, Post } from "./db.js";
export async function getUserData() {
  const userData = await fetch("https://gorest.co.in/public-api/users");
  const response = await userData.json();
  dbconnect();
  for (let i = 0; i < response.data.length; i++) {
    // console.log(response.data[i]["id"]);
    const post = new Post({
      user_id: response.data[i]["id"],
      user_name: response.data[i]["name"],
      user_email: response.data[i]["email"],
      user_gender: response.data[i]["gender"],
      user_status: response.data[i]["status"],
    });
    post.save();
  }
}
