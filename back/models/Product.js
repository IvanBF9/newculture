module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {

        img_id_1: {
            type: DataTypes.BLOB,
            allowNull: true,
            validate:{
                notEmpty: false
            }
        },
        img_id_2: {
            type: DataTypes.BLOB,
            allowNull: true,
            validate:{
                notEmpty: false
            }
        },
        img_id_3: {
            type: DataTypes.BLOB,
            allowNull: true,
            validate:{
                notEmpty: false
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        delivery: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        delivery_price: {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        partner: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

    })

    return Product;
}