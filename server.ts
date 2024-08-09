import http from "http";
import connectDB from "./database/connection";
import { app } from "./app";
require("dotenv").config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(
    `CDM module is connected and listening on port ${process.env.PORT}`
  );
  connectDB();
});
