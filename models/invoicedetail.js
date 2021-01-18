"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InvoiceDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InvoiceDetail.init(
    {
      invId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      employeeId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      vat: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "InvoiceDetail",
    }
  );
  return InvoiceDetail;
};
