const { response } = require("../helpers/response");

module.exports.getErrorResponse = (message, res) => {
  let errorArray = [];
  let errorMessage = message.details;

  errorArray = errorMessage.map((msg) => ({
    message: msg.message.split(":")[1]
      ? msg.message.split(":")[1]
      : msg.message,
    key: msg.context.key,
  }));

  return response(false, "Validation Failed", errorArray, res);
};
