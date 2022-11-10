import { Request, Response } from "express";
import { QueryResult } from "pg";
import connection from "../database/database.js";
import { PetInfoInsert, PetInfoRetrieve, PetInfoUpdate } from '../protocols/pet-protocol.js';

async function postPet(req: Request, res: Response) : Promise<Response> {
  const {
    name: name,
    species: species,
    sex: sex,
    description: description,
  } : PetInfoInsert = req.body;
  try {
    await connection.query(
      `INSERT INTO pets (name, species, sex, description) VALUES($1, $2, $3, $4);`,
      [name, species, sex, description]
    );
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getPets(req: Request, res: Response) : Promise<Response> {
    try {
      const petsAvailable: QueryResult<PetInfoRetrieve[]> = await connection.query(`SELECT * FROM pets;`);
      return res.status(200).send(petsAvailable.rows);
    } catch (error) {
      return res.status(500).send(error.message);
    }
}

async function updatePet(req: Request, res: Response) : Promise<Response> {
    const id : string = req.params.id;
    const {
        isAvailable: isAvailable
      } : PetInfoUpdate = req.body;

    try {
        await connection.query(
          `UPDATE pets
          SET "isAvailable"=$1
          WHERE id=$2;`, [isAvailable, id]
        );
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }  
}

async function deletePet(req: Request, res: Response) : Promise<Response> {
    const id : string = req.params.id;
    try {
        await connection.query(
          `DELETE FROM pets WHERE id=$1;`,
          [id]
        );
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }    
}

export { getPets, postPet, deletePet, updatePet };
