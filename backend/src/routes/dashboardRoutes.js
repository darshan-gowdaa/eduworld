const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const auth = require("../middleware/middleware");

// Get dashboard statistics (protected route)
router.get("/stats", auth, dashboardController.getDashboardStats);

module.exports = router;
