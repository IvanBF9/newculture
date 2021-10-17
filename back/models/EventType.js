module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define('EventType', {
        
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

    return EventType;
}