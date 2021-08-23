const rutasUsuario = require('./rutas.usuario')
const rutasPublicacion = require('./rutas.publicacion')
const rutasHabilidad=require('./rutas.habilidad')

module.exports = (app) => {
    rutasUsuario(app);
    rutasPublicacion(app);
    rutasHabilidad(app);

}