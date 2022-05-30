'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      accountCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parentCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      openingCredit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      openingDebit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lastOpeningCredit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lastOpeningDebit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      openingDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ledgerBalance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amountLimit: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      branch_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('account');
  }
};