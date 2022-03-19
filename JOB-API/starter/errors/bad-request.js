const CustomAPIError = require("./custom-api");
const { StatusCodes } = require("http-status-codes");
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = 401;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;

//instead of writing a number 404 ,200... use the library for status code
//  so using http-status -code library
