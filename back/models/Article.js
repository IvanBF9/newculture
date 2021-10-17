module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: true
            }
        },
        content: {
            type: DataTypes.JSON,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        valide : {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: false
        },
        categorie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CategorieArticles',
                key: 'id'
            },
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

    })

    return Article;
}