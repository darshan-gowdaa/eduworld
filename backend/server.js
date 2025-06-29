const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const applicationsRoutes = require("./routes/applicationsRoutes");
const enquiriesRoutes = require("./routes/enquiriesRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("EduWorld API is running");
});

// Use routers (uncomment after creating route files)
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationsRoutes);
app.use("/api/enquiries", enquiriesRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
