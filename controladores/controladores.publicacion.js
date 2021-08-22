const { sequelize, Usuario, Publicacion } = require('../db/conexion')
const tokenServices = require('../servicios/jwt.services')
const ctrlUsuario = require('./controladores.usuario')

const ctrl = {}

ctrl.crearPublicacion = async (req,res) => {
    try {
        await Publicacion.create(req.body)
        res.status(200).send({message: 'Publicacion creado exitosamente.'})
    } catch (error) {
        throw new Error ({message: 'Error al crear usuario'})
    }
}

ctrl.misPublicaciones = async (req,res) => {
    try {
        const pubs = await Publicacion.findAll({
            /*where: {
                usuario: req.body.nickname
            }*/
        })
        console.log(pubs)
        res.status(200).json(pubs)
    } catch (error) {
        res.status(500).json({message: 'No fue posible conectar con la base de datos.'})
    }
}
module.exports = ctrl