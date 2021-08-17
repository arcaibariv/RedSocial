const express = require('express');
const app = express();
require('dotenv').config();
const conexion = require('./db/conexion')
const cors = require('cors');
//const { corsOption } = require('./middlewares/cors.midlewares');

const rutas = require('./rutas/index')
//const rutasPresupuesto = require('./routes/presupuestos.routes.js')

app.use(cors())
app.options('*', cors())




app.use(express.json());
app.use(express.urlencoded({ extended : true }))
//app.use(cors(corsOption));

async function inicioServidor () {
    try {
        await conexion.sequelize.authenticate();
        console.log('Conexion establecida correctamente.');
        app.listen(process.env.PORT, () => {
            console.log(`Sistema inicado en htpp://${process.env.HOST}:${process.env.PORT}`)
        })
    } catch (error) {
        console.error('No se pudo conectar a la base o al servidor: ',error)
    }
}

inicioServidor();
rutas(app);
//rutasUsuario(app);
//rutasPresupuesto(app);