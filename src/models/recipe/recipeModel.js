'use strict';

const recipeModel = (sequelize, DataTypes) => sequelize.define('recipe', {
  title: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: true },
  cooktime: { type: DataTypes.INTEGER, required: true },
  type: { type: DataTypes.ENUM('breakfast', 'lunch', 'dinner', 'dessert'), required: true },
});

module.exports = recipeModel;