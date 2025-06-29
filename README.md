# EduWorld 🌍

_⚠️ Disclaimer: This project is not affiliated with any real educational institution or company. EduWorld is a portfolio project created solely to showcase my full-stack development skills. All names, features, and content are for demonstration purposes only._

---

<p align="center">
  <a href="https://drive.google.com/drive/folders/1hGJpzq83Luf3ZU3eaJoWdDkaDJ_uAF5h?usp=drive_link">
    <img src="https://img.shields.io/badge/Watch%20Demo-Click%20Here-blue?style=for-the-badge&logo=google-drive" alt="Watch the Demo" />
  </a>
</p>

---

## 🎥 Demo Videos

All feature demonstrations are available as video files in the [Google Drive Demo Folder](https://drive.google.com/drive/folders/1hGJpzq83Luf3ZU3eaJoWdDkaDJ_uAF5h?usp=drive_link):

- **Landing Page**
- **ChatBot Working & Call Button**
- **Student/Faculty Login**

> _No static screenshots are provided. Please watch the demo videos for a full walkthrough of the application's features._

---

## 🚀 Overview

**EduWorld** is a modern, full-stack educational platform designed to connect students, faculty, and administrators in a seamless, interactive environment. With a focus on global recognition, career success, and innovative learning, EduWorld offers a comprehensive suite of features for admissions, course management, enquiries, and more.

---

## ✨ Key Features

- 🤖 **Interactive Chatbot**: 24/7 support for admissions, fees, scholarships, campus info, and more. Guides users through application and enquiry processes.
- 📞 **Call Button**: Instantly connect with support or admissions via a floating call button on every page.
- 🖼️ **Modern Sliders & Popups**: Engaging hero sliders, welcome popups, and user-type selection popups for a dynamic, interactive experience.
- 📝 **Applications & Enquiries**: Students can easily submit applications and enquiries online, track their status, and receive timely updates.
- 👀 **Faculty/Admin Dashboards**: Faculty and admins can view, manage, and respond to applications and enquiries in real time.
- 📚 **Course Catalog**: Browse detailed undergraduate and postgraduate programs, with filters, highlights, and badges.
- 📈 **Analytics Dashboard**: Real-time stats for admins and faculty, including application trends and student demographics.
- 🔒 **Secure Authentication**: JWT-based login, role-based access, and secure data handling.
- 📬 **Multi-Channel Support**: Contact via phone, email, WhatsApp, or instant enquiry forms.

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=for-the-badge&logo=reactrouter" />
  <img src="https://img.shields.io/badge/Lucide%20React-Icons-8B5CF6?style=for-the-badge&logo=lucide" />
  <img src="https://img.shields.io/badge/React%20Hook%20Form-7-EC5990?style=for-the-badge&logo=reacthookform" />
  <img src="https://img.shields.io/badge/React%20Toastify-11-FF8800?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-8-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-8-880000?style=for-the-badge&logo=mongoose" />
  <img src="https://img.shields.io/badge/JWT-Auth-FFB300?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/BcryptJS-3.0.2-4B32C3?style=for-the-badge&logo=javascript" />
  <img src="https://img.shields.io/badge/Dotenv-16.6.0-8DD6F9?style=for-the-badge&logo=dotenv" />
  <img src="https://img.shields.io/badge/CORS-2.8.5-4B9CD3?style=for-the-badge&logo=cors" />
  <img src="https://img.shields.io/badge/Body--Parser-2.2.0-FF6F00?style=for-the-badge&logo=bodyparser" />
  <img src="https://img.shields.io/badge/Nodemon-3.1.0-76D04B?style=for-the-badge&logo=nodemon" />
  <img src="https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint" />
  <img src="https://img.shields.io/badge/Concurrently-8.2.2-FFCB05?style=for-the-badge&logo=concurrently" />
</p>

---

## 📦 Folder Structure

```text
eduworld/
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection setup
│   ├── controllers/
│   │   ├── applicationsController.js  # Application logic
│   │   ├── authController.js          # Auth logic
│   │   ├── dashboardController.js     # Dashboard stats
│   │   └── enquiriesController.js     # Enquiry logic
│   ├── middleware/
│   │   └── middleware.js        # Auth & other middleware
│   ├── models/
│   │   ├── Application.js       # Application schema
│   │   ├── Enquiry.js           # Enquiry schema
│   │   └── User.js              # User schema
│   ├── routes/
│   │   ├── applicationsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── enquiriesRoutes.js
│   └── server.js                # API entry point
│   └── package.json             # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── chat/
│   │   │   │   ├── ChatBot.jsx          # Main chatbot UI
│   │   │   │   └── chatbotData.js       # Chatbot Q&A logic
│   │   │   ├── common/
│   │   │   │   ├── CallButton.jsx       # Floating call button
│   │   │   │   ├── CallToAction.jsx     # CTA banners
│   │   │   │   ├── Footer.jsx           # App footer
│   │   │   │   ├── Header.jsx           # App header/nav
│   │   │   │   ├── HeroSection.jsx      # Hero/slider section
│   │   │   │   └── WelcomePopup.jsx     # Welcome popup
│   │   │   ├── forms/
│   │   │   │   ├── ApplicationForm.jsx  # Student application form
│   │   │   │   ├── AuthForm.jsx         # Login/register form
│   │   │   │   ├── EnquiryForm.jsx      # Enquiry form
│   │   │   │   └── UserTypePopup.jsx    # User type selection popup
│   │   │   ├── ui/
│   │   │   │   └── Toast.jsx            # Toast notifications
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Enquiry.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── faculty/
│   │   │   │   ├── Applications.jsx     # Faculty view of applications
│   │   │   │   ├── Dashboard.jsx        # Faculty dashboard
│   │   │   │   └── Enquiries.jsx        # Faculty view of enquiries
│   │   │   ├── student/
│   │   │   │   ├── Apply.jsx            # Student application page
│   │   │   │   ├── Dashboard.jsx        # Student dashboard
│   │   │   │   └── Status.jsx           # Application status
│   │   ├── App.jsx                      # Main app component
│   │   ├── main.jsx                     # Entry point
│   │   ├── App.css, index.css           # Styles
│   │   └── ...
│   ├── index.html
│   ├── package.json                     # Frontend dependencies
│   ├── tailwind.config.js, vite.config.js, eslint.config.js
│
├── package.json                         # Monorepo scripts
└── README.md
```

---

## ⚡ Getting Started

1. **Clone the Repo**
   ```bash
   git clone https://github.com/darshan-gowdaa/eduworld-fullstack.git
   cd eduworld-fullstack
   ```
2. **Install Dependencies**
   ```bash
   npm run setup
   ```
3. **Configure Environment**
   - Copy `.env.example` to `.env` in `backend/` and fill in your MongoDB URI and JWT secret.
4. **Run the App (Dev Mode)**
   ```bash
   npm start
   ```
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 🔗 API Overview

### Auth

- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login
- `GET /api/auth/me` — Get current user (JWT required)

### Applications

- `POST /api/applications/` — Submit application (JWT required)
- `GET /api/applications/` — List all applications (JWT required)
- `GET /api/applications/mine` — Get my application (JWT required)

### Enquiries

- `POST /api/enquiries/` — Submit enquiry
- `GET /api/enquiries/` — List all enquiries (JWT required)

### Dashboard

- `GET /api/dashboard/stats` — Get dashboard stats (JWT required)

---

## 🏗️ Main Entities

- **User**: Students, faculty, admins (role-based)
- **Application**: Student applications for admission
- **Enquiry**: General or course-specific questions

## 🗺️ Roadmap

- [x] Student application & enquiry flows
- [x] Faculty/admin dashboards
- [x] Interactive chatbot
- [x] Call button, popups, and modern UI

---

## 📬 Contact & Community

- **Email:** darshangowdaa223@gmail.com
- **Phone/WhatsApp:** +91 9113504966
- [Open an Issue](https://github.com/darshan-gowdaa/eduworld-fullstack/issues)
- [My GitHub Profile](https://github.com/darshan-gowdaa)

---

## 🏅 Badges

![GitHub last commit](https://img.shields.io/github/last-commit/darshan-gowdaa/eduworld-fullstack)
![GitHub issues](https://img.shields.io/github/issues/darshan-gowdaa/eduworld-fullstack)
![GitHub stars](https://img.shields.io/github/stars/darshan-gowdaa/eduworld-fullstack?style=social)

---

> _EduWorld: Transforming education, empowering futures._
