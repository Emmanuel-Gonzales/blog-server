'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food/foodModel.js');
const Collection = require('../models/collection.js');
const recipeModel = require('./recipe/recipeModel.js');
const userModel = require('../auth/models/users.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const recipe = recipeModel(sequelize, DataTypes);

// foodModel.hasMany(recipeModel), {
//   foreignKey: 'foodId',
//   sourceKey: 'id',
// };

// recipeModel.belongsTo(foodModel), {
//   foreignKey: 'foodId',
//   targetKey: 'id',
// };

module.exports = {
  db: sequelize,
  food: new Collection(food),
  recipe: new Collection(recipe),
  users: userModel(sequelize, DataTypes),
  // recipeModel,
};
