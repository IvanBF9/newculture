module.exports = (sequelize, DataTypes) => {
    const CommentEventReview = sequelize.define('CommentEventReview', {
        
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
                model: 'CommentEvents',
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

    return CommentEventReview;
}