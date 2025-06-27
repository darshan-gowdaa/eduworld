const express = require("express");
const router = express.Router();
const enquiriesController = require("../controllers/enquiriesController");
const auth = require("../middleware/middleware");

// Example routes (update as needed)
router.post("/", enquiriesController.submitEnquiry);
router.get("/", auth, enquiriesController.getAllEnquiries);

module.exports = router;
