'use strict';
module.exports = (sequelize, DataTypes) => {
  var recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    totalcals: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.recipe.hasMany(models.food);
      }
    }
  });
  return recipe;
};