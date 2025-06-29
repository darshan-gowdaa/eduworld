import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaFileAlt, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import axios from 'axios';

const StudentDashboard = () => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUserName(response.data.user.name);
      } catch (err) {
        console.error('Error fetching user data:', err);
        // Fallback to localStorage if API fails
        const fallbackName = localStorage.getItem('userName');
        if (fallbackName) {
          setUserName(fallbackName);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h1 className="text-2xl font-semibold text-gray-600">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Welcome, {userName || 'Student'}!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              This is your student dashboard. Use the quick actions below to apply, check your application status, or send an enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/student/apply" 
              className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 flex flex-col items-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-blue-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaFileAlt className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-lg mb-2">Apply Now</span>
              <span className="text-blue-100 text-sm text-center">Submit your application</span>
            </Link>

            <Link 
              to="/student/status" 
              className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 flex flex-col items-center hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-green-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaCheckCircle className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-lg mb-2">View Status</span>
              <span className="text-green-100 text-sm text-center">Track your progress</span>
            </Link>

            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 flex flex-col items-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-orange-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaQuestionCircle className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold text-lg mb-2">Send Enquiry</span>
              <span className="text-orange-100 text-sm text-center">Get help & support</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default StudentDashboard; 