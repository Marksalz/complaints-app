import express from "express";
import router from "./routes/complaintRoutes.js";
import { connectToMongo } from "./db/connect.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(router);

try {
  await connectToMongo();
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (err) {
  console.error("Failed to connect to DB:", err);
  process.exit(1);
}
