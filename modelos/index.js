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
        password:  type.STRING
    });
}

modelos.Publicacion = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('publicacione',{
        usuario: type.STRING,
        texto: type.STRING,
        archivo: type.STRING
    });
}

modelos.Follow = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('follow',{
        usuario: type.STRING,
        followed: type.STRING
    }); 
}

module.exports = modelos