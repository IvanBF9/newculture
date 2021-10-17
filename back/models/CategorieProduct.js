module.exports = (sequelize, DataTypes) => {
    const CategorieProduct = sequelize.define('CategorieProduct', {
        
        name: {
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

    return CategorieProduct;
}