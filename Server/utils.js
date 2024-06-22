function createResult(err, data) {
  const result = {};
  if (err) {
    // if an err occurs
    result["status"] = "error";
    result["error"] = err;
  } else {
    // if there is no error
    result["status"] = "success";
    result["data"] = data;
  }
  return result;
}

module.exports = {
  createResult: createResult,
};
