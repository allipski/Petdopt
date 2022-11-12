import { Request, Response } from "express";
import { PetSchema } from "../schemas/pet-schema.js";
import { deleteRegister, fetchPets, insertPet, updateRegister } from "../repositories/pets-repositories.js";

async function postPet(req: Request, res: Response) {
  const petInfo = req.body;

  const { error } = PetSchema.validate(petInfo);

  if(error) {
    return res.status(400).send({
      message: error.message
    })
  }

  try {
    const result = await insertPet(petInfo);
    return res.status(201).send(`Pets inserted: ${result.rowCount}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getPets(req: Request, res: Response) {
  try {
    const petsAvailable = await fetchPets();
    return res.status(200).send(petsAvailable.rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getAvailablePets(req: Request, res: Response) {
  const available: boolean = true;
  try {
    const petsAvailable = await fetchPets(available);
    return res.status(200).send(petsAvailable.rows);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updatePet(req: Request, res: Response): Promise<Response> {
  const id: string = req.params.id;
  const petInfo: boolean = req.body.isAvailable;

  try {
    const result = await updateRegister(id, petInfo);
    return res.status(200).send(`Pets updated: ${result.rowCount}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deletePet(req: Request, res: Response): Promise<Response> {
  const id: string = req.params.id;
  try {
    const result = await deleteRegister(id);
    return res.status(200).send(`Pets deleted: ${result.rowCount}`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { getPets, postPet, deletePet, updatePet, getAvailablePets };
