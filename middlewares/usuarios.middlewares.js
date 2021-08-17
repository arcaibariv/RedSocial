const { sequelize, Usuario, Publicacion, Follow } = require('../db/conexion')
const dtoUsuario = require('../dto/dto.usuario')
const Joi = require('joi');

const midd = {}

midd.correoRegistrado = async (req,res,next) => {
    correo = req.body.email
    const usuario = await Usuario.findAll({
        where: {
            email: correo
        }
    })
    if (usuario.length > 0) {
        res.status(500).json({message: 'El correo ya está registrado'})
    } else {
        next()
    }
}

midd.nicknameRegistrado = async (req,res,next) => {
    nick = req.body.nickname
    const usuario = await Usuario.findAll({
        where: {
            nickname: nick
        }
    })
    if (usuario.length > 0) {
        res.status(500).json({message: 'El nickname ya está registrado'})
    } else {
        next()
    }
}

midd.datosCompletos = (req,res,next) => {
    
    if(!req.body.nombre||!req.body.apellido||!req.body.nickname||!req.body.email||!req.body.password||!req.body.rol) {
        res.status(500).json({message: 'Es necesario llenar todos los campos obligatorios'})
    } else {
        next()
    }
}

midd.mismaPass = async (req,res,next) => {
    const usuario = await Usuario.findAll({
        where: {
            nickname: req.body.nickname
        }
    })

    if (usuario[0].dataValues.password == req.body.nuevapass) {
        res.status(500).json({message: 'No puedes usar la misma contraseña'})
    } else {
        next()
    }
}

midd.validarDatosUsuario = async (req,res,next) => {
    try {
        await Joi.attempt(req.body,dtoUsuario.crearDTO,"Verificar que los datos sean correctos.")
        next()
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = midd