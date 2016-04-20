"use strict";

module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        sku : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
	name : {
            type : DataTypes.STRING,
      	    allowNull : true,
        },
	price : {
            type : DataTypes.DOUBLE,
            allowNull : true,
        },
	mrp : {
            type : DataTypes.DOUBLE,
            allowNull : true,
        },
	description : {
            type : DataTypes.STRING,
            allowNull : true,
        },
	packing : {
            type : DataTypes.STRING,
            allowNull : true,
        },
	image : {
            type : DataTypes.STRING,
            allowNull : true,
        },
	category : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
	stock : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
	status : {
            type : DataTypes.STRING,
            allowNull : true,
        }
       
    });
    
    return Product;
};
