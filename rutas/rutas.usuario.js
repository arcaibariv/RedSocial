const ctrlUsuario = require('../controladores/controladores.usuario')
const middUsuario = require('../middlewares/usuarios.middlewares')

module.exports = (app) => {

    app.post('/registro',middUsuario.validarDatosUsuario, middUsuario.correoRegistrado, ctrlUsuario.crearUsuario)
    app.put('/cambiarpass', middUsuario.mismaPass, ctrlUsuario.cambiarPass)
    //app.post('/recuperarpass', (req,res) => {})
    //app.post('/subirimagen', (req,res) => {})
    app.post('/login', ctrlUsuario.login )
    
    //app.get('/usuario', ctrlUsuario.obtenerUsuario)
}