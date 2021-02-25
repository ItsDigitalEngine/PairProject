'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Staff.belongsToMany(models.Event, { through: models.EventStaff })
      Staff.hasMany(models.EventStaff)
    }
  };
  Staff.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};