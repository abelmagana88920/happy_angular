"use strict";

module.exports = function(sequelize, DataTypes) {
    var Name = sequelize.define("Name", {
        firstname : {
            type : DataTypes.STRING,
            allowNull : true,
        },
	middlename : {
            type : DataTypes.STRING,
      	    allowNull : true,
        },
	lastname : {
            type : DataTypes.STRING,
      	    allowNull : true,
        },
	age : {
            type : DataTypes.INTEGER,
      	    allowNull : true,
        },
	gender : {
            type : DataTypes.STRING,
      	    allowNull : true,
        },
	address : {
            type : DataTypes.STRING,
      	    allowNull : true,
        },
	status : {
            type : DataTypes.STRING,
      	    allowNull : true,
        }
	
       
    });
    
    return Name;
};
