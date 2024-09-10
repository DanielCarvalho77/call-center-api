'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Cases', 'ticketId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Tickets', 
        key: 'id'       
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Cases', 'ticketId');
  }
};

