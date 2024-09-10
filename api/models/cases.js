'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cases.belongsTo(models.Tickets, {
        foreignKey: 'ticketId'
      });
    }
  }
  Cases.init({
    caseTicket: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cases',
  });
  return Cases;
};