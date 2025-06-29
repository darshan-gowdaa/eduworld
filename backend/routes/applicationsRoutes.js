const express = require("express");
const router = express.Router();
const applicationsController = require("../controllers/applicationsController");
const auth = require("../middleware/middleware");

// Protected routes
router.post("/", auth, applicationsController.submitApplication);
router.get("/", auth, applicationsController.getAllApplications);
router.get("/mine", auth, applicationsController.getMyApplication);

module.exports = router;
