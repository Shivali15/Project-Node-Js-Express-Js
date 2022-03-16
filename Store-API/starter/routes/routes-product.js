// const express = require("express");

// const router = express.Router();

// const {
//   getallproducts,
//   getallproductsstatic,
// } = require("../controller/products");

// router.route("/").get(getallproducts);
// router.route("/static").get(getallproductsstatic);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getallproducts,
  getallproductsstatic,
} = require("../controller/products");

router.route("/").get(getallproducts);
router.route("/static").get(getallproductsstatic);

module.exports = router;
