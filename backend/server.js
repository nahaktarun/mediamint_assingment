import http from "http";
import { getUserData } from "./fetchUsers.js";
import router from "./routes/routes.js";
import express from "express";
const app = express();
app.use(express.json());

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});

getUserData();

app.use("/api", router);
