//database 'pets' table
type PetEntity= {
    id: number,
    name: string,
    species: string,
    sex: string,
    description: string,
    isAvailable?: boolean
    createdAt?: string | Date
}

type Pet = Omit<PetEntity, "id" | "isAvailable" | "createdAt">

export { Pet, PetEntity };