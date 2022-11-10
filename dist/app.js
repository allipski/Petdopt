import express from "express";
import cors from "cors";
import './setup.js';
import petsRouter from "./routers/pets-router.js";
var server = express();
server.use(cors());
server.use(express.json());
server.use(petsRouter);
var PORT = process.env.PORT;
server.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
