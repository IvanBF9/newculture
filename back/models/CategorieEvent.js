module.exports = (sequelize, DataTypes) => {
    const CategorieEvent = sequelize.define('CategorieEvent', {
        
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

    return CategorieEvent;
}