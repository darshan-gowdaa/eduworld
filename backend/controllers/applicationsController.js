const Application = require("../models/Application");

// Submit application (student)
const submitApplication = async (req, res) => {
  try {
    const { personalInfo, academicInfo, courseSelected, intake, documents } =
      req.body;
    const userId = req.user.id;
    const app = await Application.create({
      userId,
      personalInfo,
      academicInfo,
      courseSelected,
      intake,
      documents,
    });
    res.json(app);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all applications (faculty)
const getAllApplications = async (req, res) => {
  if (req.user.role !== "faculty")
    return res.status(403).json({ message: "Forbidden" });
  const apps = await Application.find().populate("userId", "name email");
  res.json(apps);
};

// Get my application (student)
const getMyApplication = async (req, res) => {
  const app = await Application.findOne({ userId: req.user.id });
  res.json(app);
};

module.exports = { submitApplication, getAllApplications, getMyApplication };
