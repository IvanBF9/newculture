module.exports = (sequelize, DataTypes) => {
    const CategorieArticle = sequelize.define('CategorieArticle', {
        
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

    return CategorieArticle;
}