const ctrlUsuario = require('../controladores/controladores.usuario')
const middUsuario = require('../middlewares/usuarios.middlewares')
const upload = require('../middlewares/multer.middlewares')

module.exports = (app) => {

    app.post('/registro',middUsuario.validarDatosUsuario, middUsuario.correoRegistrado, ctrlUsuario.crearUsuario)
    app.put('/cambiarpass', middUsuario.mismaPass, ctrlUsuario.cambiarPass)
    //app.post('/recuperarpass', (req,res) => {})
    app.post('/subirimagen',upload.single('imagen'), ctrlUsuario.subirImagen)
    app.post('/login', ctrlUsuario.login )
    
    //app.get('/usuario', ctrlUsuario.obtenerUsuario)
}