const compra =(sequelize,DataTypes)=> {
    const Compra = sequelize.define("compras",{
        idProveedor:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        fecha:{
            type: DataTypes.DATEONLY,
        },
        imagen:{
            type: DataTypes.BLOB
        },
        total_compra:{
            type: DataTypes.DECIMAL,
            allowNull:false
        }
    })
    return Compra
}

export default compra