//const { sequelize } = require("../db/conexion");

const modelos = {}

modelos.Usuario = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('usuario',{
        nombre: type.STRING,
        apellido: type.STRING,
        nickname: type.STRING,
        email: type.STRING,
        rol: type.ENUM(['persona','empresa']),
        imagen: {
            type: type.STRING,
            default: null
        },
        password: type.STRING,
        ciudad: type.STRING,
        pais: type.STRING,
        habilidades: {
            type: type.INTEGER,
            default: 0
        }
    });
}

modelos.Publicacion = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('publicacione',{
        usuario: type.STRING,
        texto: type.STRING,
        archivo: type.STRING
    });
}

modelos.Validacion = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('validacione',{
        evaludor: type.STRING,
        evaluado: type.STRING,
        habilidad: type.STRING
    });
}

modelos.Habilidades = (sequelize,type) => {
    return sequelize.define('habilidade',{
        usuario: type.STRING,
        habilidad: type.STRING,
        porcentaje: type.INTEGER
    });
}

module.exports = modelos