'use strict';
module.exports = (sequelize, DataTypes) => {
  var food = sequelize.define('food', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.food.belongsToMany(models.recipe, {through: "recipesFoods"});
      }
    }
  });
  return food;
};