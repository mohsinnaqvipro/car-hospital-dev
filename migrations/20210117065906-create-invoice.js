"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Invoices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerName: {
        type: Sequelize.STRING,
      },
      customerContact: {
        type: Sequelize.STRING,
      },
      invoiceDateTime: {
        type: Sequelize.DATE,
      },
      netAmount: {
        type: Sequelize.INTEGER,
      },
      vat: {
        type: Sequelize.INTEGER,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      invAmount: {
        type: Sequelize.INTEGER,
      },
      prevPaidAmount: {
        type: Sequelize.INTEGER,
      },
      paidAmount: {
        type: Sequelize.ENUM("pending", "inprogress", "complete"),
      },
      invStatus: {
        type: Sequelize.ENUM("pending", "inprogress", "complete"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Invoices");
  },
};
