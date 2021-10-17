module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        extension: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        blob: {
            type: DataTypes.BLOB,
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

    return Image;
}