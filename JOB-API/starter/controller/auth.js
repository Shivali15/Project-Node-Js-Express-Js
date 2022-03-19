const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
// const bcrypt = require("bcryptjs");

//register the user
const register = async (req, res) => {
  // const {name,email,password}=req.body

  // const salt =await bcrypt.genSalt(10)
  // const hasedpassword =await bcrypt.hash(password,salt )
  // const tempUser = { name, email, password :hasedpassword};

  // mongoose to all validation so passing req.body
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  //   res.send('register user')
  //   req.status(StatusCodes.CREATED).json(req.body)
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

//login the user
const login = async (req, res) => {
  //   res.send('login user')

  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
