'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Tickets', 'consumerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Pessoas', 
        key: 'id'       
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
    queryInterface.addColumn('Tickets', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos', 
        key: 'id'       
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Tickets', 'consumerId');
    queryInterface.removeColumn('Produtos', 'productId');
  }
};

