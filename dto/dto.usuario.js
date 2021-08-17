const Joi = require('joi')

const dto = {}

dto.crearDTO = Joi.object().keys({
    nombre: Joi.string().alphanum().max(50).required(),
    apellido: Joi.string().alphanum().max(50).required(),
    email: Joi.string().email().required(),
    nickname: Joi.string().alphanum().max(16).required(),
    password:  Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
    rol: Joi.string()
})

module.exports = dto