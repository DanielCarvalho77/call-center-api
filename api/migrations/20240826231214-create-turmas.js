'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.DATEONLY
      },
      docenteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Pessoas', key: 'id'
        }
      },
      nivelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Niveis', key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Turmas');
  }
};