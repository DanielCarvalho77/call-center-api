'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {

    static associate(models) {
      Produtos.belongsTo(models.Pessoas,{
        foreignKey: 'consumerId'
      });
      Produtos.hasMany(models.Tickets,{
        foreignKey: 'productId'
      });

    }
  }
  Produtos.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    mark: DataTypes.STRING,
    type: DataTypes.STRING,
    packaging: DataTypes.STRING, 
    ibu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};