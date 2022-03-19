// package that wrap all routes
// if useraname n password both are not provided then send error msz
// custom error invoked : bad request
class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = CustomAPIError;
