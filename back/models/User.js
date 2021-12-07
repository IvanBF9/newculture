module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        
        username: {
            type: DataTypes.STRING(16),
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: true
            }
        },
        profile_picture: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Images',
                key: 'id'
            },
            allowNull: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: true
            }
        },
        pw: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        postal_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bearer: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        level: {//Le level va de 1 a 5 plus ou moin légitime
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate:{
                notEmpty: true
            }
        },
        rights_level: {//level (1 basic user) (2 moderator) (3 admin)
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate:{
                notEmpty: true
            }
        },

    })

    return User;
}