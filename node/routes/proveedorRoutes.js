import proveedorController from '../controllers/proveedorController.js'
import { Router } from 'express'

const router = Router()

router.post('/addProveedor', proveedorController.addProveedor)
router.get('/getProveedores', proveedorController.getAllProveedores)
router.get('/:id', proveedorController.getOneProveedor)
router.put('/:id', proveedorController.updateProveedor)
router.delete('/:id', proveedorController.deleteProveedor)

export default router