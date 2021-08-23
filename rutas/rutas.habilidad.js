const ctrlHab = require('../controladores/controladores.habilidad')


module.exports = (app) => {
    
    app.post('/crearhabilidad', ctrlHab.crearHabilidad)
    app.get('/mishabilidades', ctrlHab.misHabilidades)
   
}