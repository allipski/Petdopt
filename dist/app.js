import dotenv from "dotenv";
import express from "express";
import cors from "cors";
var server = express();
dotenv.config();
server.use(cors());
server.use(express.json());
var PORT = process.env.PORT;
server.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
