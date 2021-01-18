const connectToDatabase = require("./dbConnection");

exports.addItem = async (model, data) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("../models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const newInstance = new modelObj(data);
  const modelData = await newInstance.save(data);
  return modelData;
};

exports.addItems = async (model, data) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("../models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const modelData = modelObj.bulkCreate(data);
  return modelData;
};

exports.updateItem = async (model, data, where) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("../models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const modelData = await modelObj.update(data, where);
  return modelData;
};

exports.getItem = async (model, where, all) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("../models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const modelData = all
    ? await modelObj.findAll(where)
    : await modelObj.findOne(where);
  return modelData;
};

exports.getItems = async (model) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("../models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const modelData = await modelObj.findAll();

  return modelData;
};

exports.deleteItem = async (model, recordId) => {
  const { sequelize, Sequelize } = await connectToDatabase();
  const modelName = await require("/opt/nodejs/models/" + model);
  const modelObj = await modelName(sequelize, Sequelize);
  const record = await modelObj.findOne({ where: { id: recordId } });
  const modelData = await record.destroy();
  return modelData;
};
