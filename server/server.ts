import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer(app);

console.log("port:",PORT)
server.listen(PORT, () => {
  console.log(`port:${PORT} server is on!`);
});
