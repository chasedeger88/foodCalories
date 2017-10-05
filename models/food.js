'use strict';
module.exports = (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    calories: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.food.belongsToMany(models.recipe, {through: "recipesFoods"});
      }
    }
  });
  return foods;
};