import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server is on!");
});
