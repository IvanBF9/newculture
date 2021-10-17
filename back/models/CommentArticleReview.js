module.exports = (sequelize, DataTypes) => {
    const CommentArticleReview = sequelize.define('CommentArticleReview', {
        
        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CommentArticles',
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

    return CommentArticleReview;
}