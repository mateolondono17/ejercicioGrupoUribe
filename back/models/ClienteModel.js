import { DataTypes } from "sequelize";
import baseDatos from "../database/conexionBaseDatos.js";


const Cliente = baseDatos.define('clientes', {
    tipoIdentificcion: {
        type:DataTypes.STRING
    },
    identificacion: {
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    nacimiento:{
        type:DataTypes.DATE
    },
    direccion:{
        type:DataTypes.STRING
    },
    ciudad:{
        type:DataTypes.STRING
    },
    departamento:{
        type:DataTypes.STRING
    },
    pais:{
        type:DataTypes.STRING
    },
    marca:{
        type:DataTypes.STRING
    },
})

export default Cliente;