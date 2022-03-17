// importing jwt package
const jwt = require("jsonwebtoken");
//importing unauthenticatederror object from error file
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //to move to next middleware so next is ask

  //authorization has to start with Bearer
  //   if not then it will poke unauthenticated error
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  //
  const token = authHeader.split(" ")[1];

  //verfiying that token is valid or not
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    //    if that token must be expired  or able to verfiy than catch will handle
    //  which through another custom error
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
