const express = require("express"); //looking for express
const router = express.Router(); // invoke router

//fetching  controller function login n dashboard
const { login, dashboard } = require("../controllers/main");

//fetching authentication middleware
const authMiddleware = require("../middleware/auth");

//before dashoard authmiddlware going to asked
//dashboard having get route
router.route("/dashboard").get(authMiddleware, dashboard);
//login having post route //get username n password
router.route("/login").post(login);

//export module router
module.exports = router;
