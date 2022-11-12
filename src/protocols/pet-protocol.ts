type PetInfoInsert = {
    name: string,
    species: string,
    sex: string,
    description: string,
    isAvailable?: boolean
}

type PetInfoRetrieve = {
    id: number,
    name: string,
    species: string,
    sex: string,
    description: string,
    isAvailable?: boolean
    createdAt: string | Date
}

export { PetInfoInsert, PetInfoRetrieve };