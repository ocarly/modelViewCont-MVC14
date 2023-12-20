const {Model, DataTypes} = require("sequelize")
const sequelize = require('../config/connection')

class Blog extends Model{}


Blog.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,            
        },
        blog_body: {
            type: DataTypes.TEXT, 
            allowNull: false,
    },
},
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "blog"
    }
);

module.exports = Blog;