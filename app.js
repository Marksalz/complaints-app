import express from "express";
import router from "./routes/complaintRoutes.js";
import "dotenv/config";

const server = express();

server.use(express.json());
server.use(express.static("public"));
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
