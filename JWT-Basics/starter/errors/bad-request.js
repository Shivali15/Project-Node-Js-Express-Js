const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = 401;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;

//instead of writing a number 404 ,200... use the library for status code
//  so using http-status -code library
