const Sequelize = require('sequelize');

const modelos = require('../modelos/index')

const sequelize = new Sequelize(process.env.DB_NOMBRE,process.env.DB_USER,process.env.DB_PASS,{
    dialect: 'mysql',
    server: process.env.DB_HOST,
    port: process.env.DB_PORT
})

const Usuario = modelos.Usuario(sequelize,Sequelize);
const Publicacion = modelos.Publicacion(sequelize,Sequelize)
const Follow = modelos.Follow(sequelize,Sequelize)

sequelize.sync({ force:false })
    .then( () => {
        console.log('Tablas sincronizadas con modelos.')
    })

module.exports = {
    sequelize,
    Usuario,
    Publicacion,
    Follow
}