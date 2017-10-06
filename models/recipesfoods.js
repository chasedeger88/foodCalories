'use strict';
module.exports = (sequelize, DataTypes) => {
  var recipesFoods = sequelize.define('recipesFoods', {
    recipeId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return recipesFoods;
};