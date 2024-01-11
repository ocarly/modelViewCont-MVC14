const router = require("express").Router();
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes.js");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dash", dashboardRoutes)

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
  
  module.exports = router;