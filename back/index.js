import express from "express";
import cors from 'cors';
import baseDatos from "./database/ConexionBaseDatos.js";

const app = express();

try {
    await baseDatos.authenticate()
    console.log('Conexion Exitosa A La Base De Datos')
} catch (error) {
    console.log('Conexion No Exitosa')  
};

app.use(express.json())
app.use(cors())

app.listen(3100, () =>{
    console.log('Servidor Corriendo en el puerto 3100')
    console.log('http://localhost:3100')
});