const rutasUsuario = require('./rutas.usuario')
const rutasPublicacion = require('./rutas.publicacion')

module.exports = (app) => {
    rutasUsuario(app);
    rutasPublicacion(app);
}