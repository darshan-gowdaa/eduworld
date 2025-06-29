import { useState } from 'react';
import AuthForm from '../components/forms/AuthForm';
import UserTypePopup from '../components/forms/UserTypePopup';
import { CheckCircle } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ isAuthenticated, setIsAuthenticated, userRole, setUserRole, setUserName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showUserTypePopup, setShowUserTypePopup] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleLogin = async (data) => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      setUserRole(res.data.user.role);
      setUserName(res.data.user.name || '');
      localStorage.setItem('userRole', res.data.user.role);
      localStorage.setItem('userName', res.data.user.name || '');
      setSuccess(`Successfully logged in as ${res.data.user.role}!`);
      setTimeout(() => {
        if (res.data.user.role === 'student') {
          window.location.href = '/student/dashboard';
        } else {
          window.location.href = '/faculty/dashboard';
        }
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
    setShowUserTypePopup(false);
  };

  const handleLoginClick = () => {
    setShowUserTypePopup(true);
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80')` }}
        />
        <div className="relative z-10 flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl py-8 px-4 sm:px-10 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to University Portal!</h2>
              <p className="text-white/80 mb-6">
                You are logged in as <span className="font-semibold text-blue-300 capitalize">{userRole}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.4), rgba(30, 64, 175, 0.6)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80')` }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-white/10 text-6xl animate-pulse">📚</div>
        <div className="absolute top-40 right-20 text-white/10 text-4xl animate-pulse delay-1000">🎓</div>
        <div className="absolute bottom-40 left-20 text-white/10 text-5xl animate-pulse delay-500">🏛️</div>
        <div className="absolute top-60 left-1/3 text-white/10 text-3xl animate-pulse delay-700">📖</div>
        <div className="absolute bottom-60 right-1/3 text-white/10 text-4xl animate-pulse delay-300">🔬</div>
      </div>
      <div className="relative z-10 flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-6">
            <Link to="/" className="relative flex items-center justify-center group">
              {/* Soft purple glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-200/60 via-transparent to-transparent blur-2xl opacity-80 w-14 h-14 -z-10" />
              {/* Blue-purple gradient circle */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2.25 8.25l9.75 5.25 9.75-5.25L12 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V8.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5v4.125c0 .621-.384 1.18-.96 1.393l-6.54 2.454a2.25 2.25 0 01-1.5 0l-6.54-2.454A1.5 1.5 0 014.5 14.625V10.5" />
                </svg>
              </div>
            </Link>
          </div>
          <h2 className="text-center text-4xl font-bold text-white mb-2 drop-shadow-lg">
            University Portal
          </h2>
          <h3 className="text-center text-xl font-semibold text-blue-100 mb-2">
            Sign in to your account
          </h3>
          <p className="text-center text-sm text-blue-200">
            Access your academic dashboard
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl py-8 px-4 sm:px-10">
            {selectedUserType ? (
              <AuthForm
                mode="login"
                selectedUserType={selectedUserType}
                onSubmit={handleLogin}
                isLoading={isLoading}
                error={error}
                success={success}
                submitText="Sign in to University Portal"
                linkText="Don't have an account? Register"
                linkTo="/register"
              />
            ) : (
              <div className="text-center">
                <button
                  onClick={handleLoginClick}
                  className="w-full group relative flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-sm hover:from-blue-700/90 hover:to-blue-800/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 transform hover:scale-105 shadow-xl"
                >
                  Sign in to University Portal
                </button>
                <p className="text-center text-sm text-blue-200 mt-4">
                  <Link to="/register" className="font-medium text-blue-300 hover:text-blue-200 transition duration-200">
                    Don't have an account? Register
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Type Selection Popup */}
      <UserTypePopup
        isOpen={showUserTypePopup}
        onClose={() => setShowUserTypePopup(false)}
        onUserTypeSelect={handleUserTypeSelect}
        mode="login"
      />
    </div>
  );
};

export default Login;