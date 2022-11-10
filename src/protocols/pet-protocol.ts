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

type PetInfoUpdate = {
    isAvailable: boolean
}

export { PetInfoInsert, PetInfoRetrieve, PetInfoUpdate };