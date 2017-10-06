'use strict';
module.exports = (sequelize, DataTypes) => {
  var recipesfoods = sequelize.define('recipesfoods', {
    recipeid: DataTypes.INTEGER,
    foodid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.recipe.belongsToMany(models.food, {through: "recipesfoods"});
      }
    }
  });
  return recipesfoods;
};