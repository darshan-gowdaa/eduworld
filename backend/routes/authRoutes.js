const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/middleware");

// Example routes (update as needed)
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/me", auth, authController.getCurrentUser);

module.exports = router;
