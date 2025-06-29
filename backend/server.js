const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const applicationsRoutes = require("./src/routes/applicationsRoutes");
const enquiriesRoutes = require("./src/routes/enquiriesRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");

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
