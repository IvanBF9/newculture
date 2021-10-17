module.exports = (sequelize, DataTypes) => {
    const ProductReview = sequelize.define('ProductReview', {
        
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
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

    return ProductReview;
}