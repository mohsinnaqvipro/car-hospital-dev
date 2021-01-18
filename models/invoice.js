"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Invoice.init(
    {
      customerName: DataTypes.STRING,
      customerContact: DataTypes.STRING,
      invoiceDateTime: DataTypes.DATE,
      netAmount: DataTypes.INTEGER,
      vat: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      invAmount: DataTypes.INTEGER,
      prevPaidAmount: DataTypes.INTEGER,
      paidAmount: DataTypes.ENUM("pending", "inprogress", "complete"),
      invStatus: DataTypes.ENUM("pending", "inprogress", "complete"),
    },
    {
      sequelize,
      modelName: "Invoice",
    }
  );
  return Invoice;
};
