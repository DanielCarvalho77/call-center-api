'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tickets.belongsTo(models.Pessoas,{
        foreignKey: 'consumerId'
      });
      Tickets.belongsTo(models.Produtos,{
        foreignKey: 'productId'
      });
    }
  }
  Tickets.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};