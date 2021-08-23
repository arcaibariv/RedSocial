const { sequelize, Usuario, Habilidades } = require('../db/conexion')
const ctrlUsuario = require('./controladores.usuario')

const ctrl = {}

ctrl.crearHabilidad = async (req,res) => {
    try {
        await Habilidades.create(req.body)
        res.status(200).send({message: 'Habilidad dada de alta creado exitosamente.'})
    } catch (error) {
        throw new Error ({message: 'Error al crear usuario'})
    }
}

ctrl.misHabilidades = async (req,res) => {
    try {
        const hab = await Habilidades.findAll({
            /*where: {
                usuario: req.body.nickname
            }*/
        })
        console.log(hab)
        res.status(200).json(hab)
    } catch (error) {
        res.status(400).json({message: 'No fue posible regresar los datos'})
    }
}
module.exports = ctrl