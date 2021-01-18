module.exports.response = (success, message, data, res) => {
  res.statusCode = success ? 200 : 400;
  res.setHeader("Content-Type", "text/plain");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(("Access-Control-Allow-Headers", "*"));
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  let responseData = JSON.stringify({
    success: success || false,
    message: message || "",
    data: data || {},
  });
  res.end(responseData);
};
