import { Router } from "express";
import { getPets, postPet, deletePet, updatePet, getAvailablePets } from "../controllers/pets-controller.js";
var petsRouter = Router();
petsRouter.post('/pets', postPet);
petsRouter.get('/pets', getPets);
petsRouter.get('/pets/available', getAvailablePets);
petsRouter["delete"]('/pets/:id', deletePet);
petsRouter.put('/pets/:id', updatePet);
export default petsRouter;
