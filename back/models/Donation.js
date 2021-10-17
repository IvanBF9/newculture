module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define('Donation', {
        
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        amount: {
            type: DataTypes.DECIMAL(15,2),
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
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

    })

    return Donation;
}