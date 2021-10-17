module.exports = (sequelize, DataTypes) => {
    const ArticleReview = sequelize.define('ArticleReview', {
        
        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        article_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Articles',
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

    return ArticleReview;
}