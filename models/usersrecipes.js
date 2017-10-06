'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersrecipes = sequelize.define('usersrecipes', {
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.user.belongsToMany(models.recipe, {through: "usersrecipes"});
      }
    }
  });
  return usersrecipes;
};