'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersRecipes = sequelize.define('usersRecipes', {
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersRecipes;
};