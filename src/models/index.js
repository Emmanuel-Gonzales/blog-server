'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food/foodModel.js');
const Collection = require('../models/collection.js');
const recipeModel = require('./recipe/recipeModel.js');
const userModel = require('../auth/models/users.js');
// const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const recipe = recipeModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: new Collection(food),
  recipe: new Collection(recipe),
  users: userModel(sequelize, DataTypes),
};
