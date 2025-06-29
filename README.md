# EduWorld 🌍

> **⚠️ Disclaimer:** This project is not affiliated with any real educational institution or company. EduWorld is a portfolio project created solely to showcase my full-stack development skills. All names, features, and content are for demonstration purposes only.

[![Watch the Demo](https://img.shields.io/badge/Watch%20Demo-Click%20Here-blue?style=for-the-badge&logo=google-drive)](https://drive.google.com/drive/folders/1hGJpzq83Luf3ZU3eaJoWdDkaDJ_uAF5h?usp=drive_link)

> **Empowering students with quality education and innovative learning experiences.**

---

## 🚀 Overview

**EduWorld** is a modern, full-stack educational platform designed to connect students, faculty, and administrators in a seamless, interactive environment. With a focus on global recognition, career success, and innovative learning, EduWorld offers a comprehensive suite of features for admissions, course management, enquiries, and more.

---

## ✨ Key Features

- 🤖 **Interactive Chatbot**: 24/7 AI-powered support for admissions, fees, scholarships, campus info, and more. Guides users through application and enquiry processes.
- 📞 **Call Button**: Instantly connect with support or admissions via a floating call button on every page.
- 🖼️ **Modern Sliders & Popups**: Engaging hero sliders, welcome popups, and user-type selection popups for a dynamic, interactive experience.
- 📝 **Applications & Enquiries**: Students can easily submit applications and enquiries online, track their status, and receive timely updates.
- 👀 **Faculty/Admin Dashboards**: Faculty and admins can view, manage, and respond to applications and enquiries in real time.
- 📚 **Course Catalog**: Browse detailed undergraduate and postgraduate programs, with filters, highlights, and badges.
- 📈 **Analytics Dashboard**: Real-time stats for admins and faculty, including application trends and student demographics.
- 🔒 **Secure Authentication**: JWT-based login, role-based access, and secure data handling.
- 📬 **Multi-Channel Support**: Contact via phone, email, WhatsApp, or instant enquiry forms.

---

## 🎥 Demo Videos

All feature demonstrations are available as video files in the [Google Drive Demo Folder](https://drive.google.com/drive/folders/1hGJpzq83Luf3ZU3eaJoWdDkaDJ_uAF5h?usp=drive_link):

- **Landing Page**
- **ChatBot Working & Call Button**
- **Student/Faculty Login**

> _No static screenshots are provided. Please watch the demo videos for a full walkthrough of the application's features._

---

## 🛠️ Tech Stack

**Frontend:**

- React 19 + Vite
- Tailwind CSS 4
- React Router 7
- Lucide Icons
- React Hook Form, React Toastify

**Backend:**

- Node.js v20
- Express 5
- MongoDB (via Mongoose 8)
- JWT Auth, BcryptJS
- Dotenv, CORS, Body-Parser

**Dev Tools:**

- Nodemon, ESLint, Concurrently

---

## 📦 Folder Structure

```
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

### 1. Clone the Repo

```bash
git clone https://github.com/darshan-gowdaa/eduworld-full-stack.git
cd eduworld-full-stack
```

### 2. Install Dependencies

```bash
npm run setup
```

### 3. Configure Environment

- Copy `.env.example` to `.env` in `backend/` and fill in your MongoDB URI and JWT secret.

### 4. Run the App (Dev Mode)

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

---

> Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) and write clear, concise commit messages.

---

## 🗺️ Roadmap

- [x] Student application & enquiry flows
- [x] Faculty/admin dashboards
- [x] Interactive chatbot
- [x] Call button, popups, and modern UI

---

## 📬 Contact & Community

- **Email:** darshangowdaa223@gmail.com
- **Phone/WhatsApp:** +91 9113504966
- [Open an Issue](https://github.com/darshan-gowdaa/eduworld-full-stack/issues)
- [My GitHub Profile](https://github.com/darshan-gowdaa)

---

## 🏅 Badges

![GitHub last commit](https://img.shields.io/github/last-commit/darshan-gowdaa/eduworld-full-stack)
![GitHub issues](https://img.shields.io/github/issues/darshan-gowdaa/eduworld-full-stack)
![GitHub stars](https://img.shields.io/github/stars/darshan-gowdaa/eduworld-full-stack?style=social)

---

> _EduWorld: Transforming education, empowering futures._
