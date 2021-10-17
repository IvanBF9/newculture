module.exports = (sequelize, DataTypes) => {
    const CommentArticle = sequelize.define('CommentArticle', {
        
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false,
        },
        article_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Articles',
                key: 'id'
            },
            allowNull: true,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

    })

    return CommentArticle;
}