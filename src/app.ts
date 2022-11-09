import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const server = express();

dotenv.config();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})