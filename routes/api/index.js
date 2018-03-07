const router = require("express").Router();
const activityRoutes = require("./activity");

// Activity routes
router.use("/activity", activityRoutes);

module.exports = router;