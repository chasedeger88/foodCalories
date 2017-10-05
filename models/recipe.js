'use strict';
module.exports = function(sequelize, DataTypes) {
  var recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.recipe.belongsToMany(models.food, {through: recipesFoods});
        models.recipe.belongsToMany(models.user, {through: usersRecipes});
      }
    },
    hooks: {
      beforeCreate: function(recipe, options, cb){
        recipe.name = recipe.name.toUpperCase();

        ///use callback to pass updated object back
        cb(null, recipe);
      }
    }
  });
  return recipe;
};