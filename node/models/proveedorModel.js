const proveedor = (sequelize, DataTypes)=>{
    const Proveedor = sequelize.define('proveedores',{
        nombre:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        direccion:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        nit:{
            type:DataTypes.STRING(14),
            allowNull: false
        },
        tipo:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        estado:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        telefono:{
            type:DataTypes.STRING(15),
            allowNull:false
        },
        nombreContacto:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        telefonoContacto:{
            type:DataTypes.STRING(10),
            allowNull:false
        },
        emailContacto:{
            type:DataTypes.STRING(100),
            allowNull:false
        }
    })
    return Proveedor
}
export default proveedor