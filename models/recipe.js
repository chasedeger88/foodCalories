'use strict';
module.exports = (sequelize, DataTypes) => {
  var recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    totalCals: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.recipe.belongsToMany(models.food, {through: "recipesFoods"});
        models.recipe.belongsToMany(models.user, {through: "usersRecipes"});
      }
    }
  });
  return recipe;
};