import { useState } from 'react';
import AuthForm from '../components/forms/AuthForm';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import axios from 'axios';

const Register = ({ isAuthenticated, setIsAuthenticated, userRole, setUserRole, setUserName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      const payload = { ...data, name: data.fullName };
      delete payload.fullName;
      const res = await axios.post('http://localhost:5000/api/auth/register', payload);
      localStorage.setItem('token', res.data.token);
      setIsSuccess(true);
      setIsAuthenticated(true);
      setUserRole(res.data.user.role);
      setUserName(res.data.user.name || '');
      localStorage.setItem('userRole', res.data.user.role);
      localStorage.setItem('userName', res.data.user.name || '');
      setTimeout(() => {
        if (res.data.user.role === 'student') {
          navigate('/student/dashboard');
        } else {
          navigate('/faculty/dashboard');
        }
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80')` }}
        />
        <div className="relative z-10 flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl py-8 px-4 sm:px-10 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
              <p className="text-white/80 mb-4">
                Your account has been created successfully. You will be automatically logged in and redirected to your dashboard.
              </p>
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-6 w-6 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                <span className="text-blue-200">Redirecting...</span>
              </div>
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
            Create your account
          </h3>
          <p className="text-center text-sm text-blue-200">
            Or{' '}
            <a href="/login" className="font-medium text-blue-300 hover:text-blue-200 transition duration-200">
              sign in to your existing account
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl py-8 px-4 sm:px-10">
            <AuthForm
              mode="register"
              onSubmit={handleRegister}
              isLoading={isLoading}
              error={error}
              submitText="Create account"
              linkText="Already have an account? Login"
              linkTo="/login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 