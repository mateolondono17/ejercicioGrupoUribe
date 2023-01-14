

const crearCliente = async (req, res) =>{
    try {
        await Cliente.create(req.body)
        res.json({
            message:'Cliente Creado Correctamente'
        });
    } catch (error) {
        res.json({
            message:'no se pudo crear el cliente' + error
        });
    }
};

export default crearCliente;