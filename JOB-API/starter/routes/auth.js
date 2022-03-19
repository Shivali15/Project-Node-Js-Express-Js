const express = require("express");
// setup the router
const router = express.Router();

//importing both of the function from controller
const { register, login } = require("../controller/auth");
router.post("/register", register);
router.post("/login", login);

module.exports = router;
