import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CallButton from './components/common/CallButton';
import ChatBot from './components/chat/ChatBot';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import StudentApply from './pages/student/Apply';
import StudentStatus from './pages/student/Status';

// Faculty Pages
import FacultyDashboard from './pages/faculty/Dashboard';
import FacultyApplications from './pages/faculty/Applications';
import FacultyEnquiries from './pages/faculty/Enquiries';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || '');
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

  // Keep localStorage in sync with state
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem('userRole', userRole || '');
      localStorage.setItem('userName', userName || '');
    }
  }, [isAuthenticated, userRole, userName]);

  // Helper for logout (can be passed to Header if needed)
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
    setUserName('');
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
  };

  // Custom wrapper to use hooks outside Router
  function AppContent() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
      <div className="min-h-screen bg-gray-50">
        <Header isAuthenticated={isAuthenticated} userRole={userRole} userName={userName} onLogout={handleLogout} pathname={location.pathname} />
        <main className={`flex-1${isHome ? '' : ' pt-16'}`}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} userRole={userRole} setUserRole={setUserRole} userName={userName} setUserName={setUserName} />} />
            <Route path="/register" element={<Register isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} userRole={userRole} setUserRole={setUserRole} userName={userName} setUserName={setUserName} />} />
            
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/apply" element={<StudentApply />} />
            <Route path="/student/status" element={<StudentStatus />} />
            
            {/* Faculty Routes */}
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/faculty/applications" element={<FacultyApplications />} />
            <Route path="/faculty/enquiries" element={<FacultyEnquiries />} />
          </Routes>
        </main>

        <Footer />
        <CallButton />
        <ChatBot />
      </div>
    );
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
