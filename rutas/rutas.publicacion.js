const ctrlPub = require('../controladores/controladores.publicacion')
const middPub = require('../middlewares/publicacion.middlewares')

module.exports = (app) => {
    
    app.post('/hacerpublicaion', ctrlPub.crearPublicacion)
    
    app.get('/mispublicaciones', ctrlPub.misPublicaciones)
    app.get('/publicacion', () => {})


}