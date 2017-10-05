'use strict';
module.exports = (sequelize, DataTypes) => {
  var recipesFoods = sequelize.define('recipesFoods', {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return recipesFoods;
};