import dbConfig from '../config/dbConfig.js';
import { Sequelize, DataTypes } from "sequelize";
import proveedorModel from './proveedorModel.js'
import comprasModel from './comprasModel.js'
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    dialect:"mysql",
}
)

sequelize.authenticate()
    .then(() => {
        console.log('Conectado...');
    })
    .catch((error) => {
        console.log(error);
    })

const db = {}
db.Proveedor = proveedorModel(sequelize, DataTypes)
db.Compras = comprasModel(sequelize, DataTypes)
export default db