'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Testes.belongsTo(models.Tickets,{
        foreignKey: 'bananaIds'
      });
    }
  }
  Testes.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Testes',
  });
  return Testes;
};