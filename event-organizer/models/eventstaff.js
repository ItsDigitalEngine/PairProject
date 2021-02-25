'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventStaff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EventStaff.belongsTo(models.Event),
      EventStaff.belongsTo(models.Staff)
    }
  };
  EventStaff.init({
    role: DataTypes.STRING,
    StaffId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventStaff',
  });
  return EventStaff;
};