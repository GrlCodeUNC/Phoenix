
const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activity"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findById)
  .put(activityController.update)
  .delete(activityController.remove);

// Matches with "api/activity/:user"
router
  .route("/:user")
  .get(activityController.findAll)
module.exports = router;