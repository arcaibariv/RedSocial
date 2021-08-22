const Sequelize = require('sequelize');

const modelos = require('../modelos/index')

const sequelize = new Sequelize(process.env.DB_NOMBRE,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: "mysql",
   
});

const Usuario = modelos.Usuario(sequelize,Sequelize);
const Publicacion = modelos.Publicacion(sequelize,Sequelize)
const Validacion = modelos.Validacion(sequelize,Sequelize)
const Habilidades = modelos.Habilidades(sequelize,Sequelize)

sequelize.sync({ force:false })
    .then( () => {
        console.log('Tablas sincronizadas con modelos.')
    })

module.exports = {
    sequelize,
    Usuario,
    Publicacion,
    Validacion,
    Habilidades
}