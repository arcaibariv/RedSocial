const { sequelize, Usuario, Publicacion, Follow } = require('../db/conexion')
const tokenServices = require('../servicios/jwt.services')
const bcrypt =require('bcryptjs')


const ctrl = {}

ctrl.crearUsuario = async (req,res) => {
    try {
        req.body.password =bcrypt.hashSync(req.body.password,10)
        await Usuario.create(req.body)
        res.status(200).send({message: 'Usuario creado exitosamente.'})
    } catch (error) {
        throw new Error ({message: 'Error al crear usuario'})
    }
}

ctrl.cambiarPass = async (req,res) => {
    try {
        await Usuario.update({ password: req.body.nuevapass},
            {
                where: {
                    email: req.body.email
                }
            })
        res.status(200).json({message: 'Contraseña actualizada'})
    } catch (error) {
        throw new Error ('No fue posible actualizar la contraseña ', error)
        
    }
}

ctrl.login = async (req,res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if (usuario){
            const iguales= bcrypt.compareSync(req.body.password, usuario.password);
            if (iguales) {
                const token = await tokenServices.generarToken(usuario)
                console.log(token)
            res.status(200).json(token)
            }
        }
        else {
            res.status(500).json({mesage: 'El usuario o contraseña no son correcto.'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'No es posible hacer login, vuelva a introducir sus credenciales.'})
    }
}

ctrl.obtenerUsuario = async (req,res) => {
    try {
        const usuario = await Usuario.findAll({
            where: {
                nickname: req.body.nickname
            }
        })

        res.status(200).json(usuario[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'No fue posible encontrar al usuario.'})
    }
}

module.exports = ctrl