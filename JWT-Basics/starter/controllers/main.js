// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard

// importing the package json webtokens
const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

//async function
//package that handles express async error

const login = async (req, res) => {
  //check for usernam en passwprd
  //since method is post so data  req.body mein hoga
  const { username, password } = req.body;
  // mongoose validation :if values not persent there poke error

  // check in the controller

  //checking if username and password are both provided or not
  //if not provide send back error response
  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  //just for demo, normally provided by DB!!!!
  // not real id  created fake id
  const id = new Date().getDate();

  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!

  // sign() method  not for confidential information just like password
  // so passed password by JWT_secret string (hided)
  //the secret that used to sign tokens
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    // secret value provided with expires that it will expire in 30 days
    expiresIn: "30d",
  });
  //response::looking for json with msz that user created in frontend
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    // ${req.user.username} invoke tempalte string
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

//exporting the create objects
//looking for two functions login n dashboard
module.exports = {
  login,
  dashboard,
};
