const Application = require("../models/Application");
const Enquiry = require("../models/Enquiry");
const User = require("../models/User");

// Get dashboard statistics (faculty only)
const getDashboardStats = async (req, res) => {
  try {
    if (req.user.role !== "faculty") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Get counts from all collections
    const [applicationsCount, enquiriesCount, studentsCount, facultyCount] =
      await Promise.all([
        Application.countDocuments(),
        Enquiry.countDocuments(),
        User.countDocuments({ role: "student" }),
        User.countDocuments({ role: "faculty" }),
      ]);

    res.json({
      applications: applicationsCount,
      enquiries: enquiriesCount,
      students: studentsCount,
      faculty: facultyCount,
    });
  } catch (err) {
    console.error("Dashboard stats error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getDashboardStats };
