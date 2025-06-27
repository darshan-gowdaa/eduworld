import { useState } from 'react';
import AuthForm from '../components/forms/AuthForm';
import { CheckCircle } from 'lucide-react';
import axios from 'axios';

const Login = ({ isAuthenticated, setIsAuthenticated, userRole, setUserRole, setUserName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/20">
              <img src="/vite.svg" alt="Logo" className="h-12 w-12 text-white" />
            </div>
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
            <AuthForm
              mode="login"
              onSubmit={handleLogin}
              isLoading={isLoading}
              error={error}
              success={success}
              submitText="Sign in to University Portal"
              linkText="Don't have an account? Register"
              linkTo="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;