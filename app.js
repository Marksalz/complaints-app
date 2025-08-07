import express from "express";
import router from "./routes/complaintRoutes.js";
import "dotenv/config";

const server = express();

server.use(express.json());
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(router);

// server.get("/", (req, res) => {
//   res.send("Welcome to the Complaints App!");
// });

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000:");
});
