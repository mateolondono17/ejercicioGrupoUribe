import { Sequelize } from "sequelize";

const baseDatos = new Sequelize('programafidelidad', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

export default baseDatos;