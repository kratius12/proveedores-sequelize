import db from '../models/index.js'

const Proveedor = db.Proveedor
const Compra = db.Compra


const addProveedor = async (req, res) => {
    let info = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        nit: req.body.nit,
        tipo: req.body.tipo,
        estado: req.body.estado,
        email: req.body.email,
        telefono: req.body.telefono,
        nombreContacto: req.body.nombreContacto,
        telefonoContacto: req.body.telefonoContacto,
        emailContacto: req.body.emailContacto,
    }
    const proveedor = await Proveedor.create(info)
    res.status(200).send(proveedor)
    console.log(Proveedor)
}

const getAllProveedores = async (req, res) => {
    let proveedores = await Proveedor.findAll({})
    res.send(proveedores)
}

const getOneProveedor = async (req, res) => {
    let id = req.params.id
    let proveedores = await Proveedor.findOne({
        where: { id: id },
    })
    res.send(proveedores)
}


const updateProveedor = async (req, res) => {
    let id = req.params.id

    const proveedor = await Proveedor.update(req.body, { where: { id: id } })

    res.status(200).send(proveedor)
}

const deleteProveedor = async (req, res) => {
    let id = req.params.id

    await Proveedor.destroy({ where: { id: id } })

    res.status(200).send('el proveedor ha sido eliminado!')
}


export default {
    addProveedor,
    getAllProveedores,
    getOneProveedor,
    updateProveedor,
    deleteProveedor
}