import express from 'express';
import { crearCliente } from '../controllers/ClienteController.js';

const clienteRouter = express.Router();

clienteRouter.post('/', crearCliente)

export default clienteRouter;