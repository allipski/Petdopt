import Joi from 'joi';

const PetSchema = Joi.object({
    name: Joi.string().max(60).required(),
    species: Joi.string().allow('cat', 'dog').required(),
    sex: Joi.string().allow('male', 'female').required(),
    description: Joi.string().min(100).required()
})

export { PetSchema };