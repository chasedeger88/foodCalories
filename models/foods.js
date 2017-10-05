'use strict';
module.exports = (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    calories: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.foods.belongsToMany(models.recipes, {through: "recipesFoods"});
      }
    }
  });
  return foods;
};