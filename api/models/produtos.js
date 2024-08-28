'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.belongsTo(models.Pessoas,{
        foreignKey: 'consumerId'
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