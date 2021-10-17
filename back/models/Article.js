module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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