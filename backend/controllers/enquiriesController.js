const Enquiry = require("../models/Enquiry");

// Submit enquiry (public)
const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message, preferredContact, urgency } =
      req.body;
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      course,
      message,
      preferredContact,
      urgency,
    });
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all enquiries (faculty)
const getAllEnquiries = async (req, res) => {
  if (req.user.role !== "faculty")
    return res.status(403).json({ message: "Forbidden" });
  const enquiries = await Enquiry.find();
  res.json(enquiries);
};

module.exports = { submitEnquiry, getAllEnquiries };
