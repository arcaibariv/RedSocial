const jwt = require('jsonwebtoken')
require('dotenv').config();

const tokenServices = {}

tokenServices.generarToken = async (payload) => {
    payload.password = undefined
    const token = jwt.sign(
        { data: payload },
        process.env.JWT_SEED,
        { expiresIn: '24h' }
    )
    return token
}

tokenServices.descubrirToken = async (token) => {
    const resultado = jwt.verify(token,process.env.JWT_SEED)
    if (resultado) {
        return resultado        
    } else {
        throw new Error ('Token no valido')
    }
}

module.exports = tokenServices