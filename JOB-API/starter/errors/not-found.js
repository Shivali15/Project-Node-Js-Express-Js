const CustomAPIError = require("./custom-api");
const { StatusCodes } = require("http-status-codes");
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = 401;
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;

//instead of writing a number 404 ,200... use the library for status code
//  so using http-status -code library
