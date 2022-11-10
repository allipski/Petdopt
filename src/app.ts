import express from "express";
import cors from "cors";
import './setup.js';
import petsRouter from "./routers/pets-router.js";

const server = express();

server.use(cors());
server.use(express.json());

server.use(petsRouter);

const PORT : string = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})