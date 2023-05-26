'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('food', {
  title: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: false },
  calories: { type: DataTypes.INTEGER, required: true },
  type: { type: DataTypes.ENUM('carbs', 'meat', 'veggie', 'protien'), required: true },
});

module.exports = foodModel;