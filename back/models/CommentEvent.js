module.exports = (sequelize, DataTypes) => {
    const CommentEvent = sequelize.define('CommentEvent', {
        
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
                model: 'Events',
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

    return CommentEvent;
}