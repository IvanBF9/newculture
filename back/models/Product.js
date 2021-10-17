module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {

        categorie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CategorieProducts',
                key: 'id'
            },
            allowNull: false,
        },
        img_id_1: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Images',
                key: 'id'
            },
            allowNull: false,
        },
        img_id_2: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Images',
                key: 'id'
            },
            allowNull: true,
        },
        img_id_3: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Images',
                key: 'id'
            },
            allowNull: true,
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