import { QueryResult } from "pg";
import connection from "../database/database.js";
import { PetInfoInsert, PetInfoRetrieve } from "../protocols/pet-protocol.js"

async function insertPet(petInfo: PetInfoInsert): Promise<QueryResult<Response>> {
    return await connection.query(
        `INSERT INTO pets (name, species, sex, description) VALUES($1, $2, $3, $4);`,
        [petInfo.name, petInfo.species, petInfo.sex, petInfo.description]
    );
}

async function fetchPets(available?: boolean): Promise<QueryResult<PetInfoRetrieve>> {
    if (available === true) {
        return await connection.query(`SELECT * FROM pets WHERE "isAvailable"=true;`)
    }
    return await connection.query(`SELECT * FROM pets;`)
}

async function updateRegister(id: string, petInfo: boolean): Promise<QueryResult<Response>> {
    return await connection.query(
        `UPDATE pets
            SET "isAvailable"=$1
            WHERE id=$2;`,
        [petInfo, id]
      );
}

async function deleteRegister(id: string): Promise<QueryResult<Response>> {
    return await connection.query(`DELETE FROM pets WHERE id=$1;`, [id]);
}

export { insertPet, fetchPets, updateRegister, deleteRegister };