'use strict';
module.exports = function(sequelize, DataTypes) {
  var recipes = sequelize.define('recipes', {
    name: DataTypes.STRING,
    food: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.recipes.belongsToMany(models.foods, {through: "recipesFoods"});
        models.recipes.belongsToMany(models.user, {through: "usersRecipes"});
      }
    },
    hooks: {
      beforeCreate: function(recipe, options, cb){
        recipes.name = recipes.name.toUpperCase();

        ///use callback to pass updated object back
        cb(null, recipes);
      }
    }
  });
  return recipes;
};