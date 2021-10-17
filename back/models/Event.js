module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
        date: {
            type : DataTypes.DATE,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        categorie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CategorieEvents',
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

    return Event;
}