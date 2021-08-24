const { sequelize, Usuario } = require('../db/conexion')
const tokenServices = require('../servicios/jwt.services')
const bcrypt =require('bcryptjs')
const path = require('path')
const fs = require('fs-extra')


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
        await Usuario.update({ password: bcrpt.hashSync(req.body.nuevapass)},
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
            const iguales= bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                const token = await tokenServices.generarToken(usuario[0])
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

ctrl.subirImagen = async (req,res) => { 
    try {
        const ext = path.extname(req.file.originalname).toLowerCase();
        const rutaTemporal = req.file.path
        const rutaFinal = path.resolve(`public/upload/imagenes/foto${req.body.id}${ext}`)

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') { 
            await fs.rename(rutaTemporal,rutaFinal)
            await Usuario.update({imagen: rutaFinal},
                {
                    where:{
                        id: req.body.id
                    }
                })
            res.status(200).json({message:'Imagen subida con éxito'})
        } else {
            res.status(500).json({message:'No imagen'})
        }
    } catch (error) {
        res.status(500).json({message: 'Error al subir la imagen.'})
        throw new Error ('No pos no se puede subir la imagen we')
    }
}
module.exports = ctrl