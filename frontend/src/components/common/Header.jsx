import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaGraduationCap, FaChevronDown, FaBell, FaSearch, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ isAuthenticated = true, userRole = 'student', userName = '', dashboardMode = false, onLogout, pathname = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ];

  const notifications = [
    { id: 1, text: 'New assignment posted in Math 101', time: '2h ago', unread: true },
    { id: 2, text: 'Grade updated for Physics Quiz', time: '1d ago', unread: true },
    { id: 3, text: 'Welcome to EduWorld!', time: '3d ago', unread: false }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80'
          : 'backdrop-blur-2xl bg-white/90 shadow-2xl border-b border-gray-200/50'
      }`}
      style={{
        borderRadius: isScrolled ? '0' : '0 0 2rem 2rem',
        border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
        boxShadow: isScrolled 
          ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-full">
                <FaGraduationCap className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                EduWorld
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-medium">Learn. Grow. Succeed.</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                  isActiveLink(link.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {!isActiveLink(link.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                )}
                {isActiveLink(link.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Enhanced Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {pathname === '/login' ? (
              <Link
                to="/register"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                Register
              </Link>
            ) : pathname === '/register' ? (
              <Link
                to="/login"
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                Sign In
              </Link>
            ) : dashboardMode ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-gray-900">Welcome, {userName || 'User'}!</span>
                <button
                  onClick={handleLogout}
                  className="p-3 text-red-600 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                  title="Sign Out"
                >
                  <FaSignOutAlt className="h-4 w-4" />
                </button>
              </div>
            ) : isAuthenticated ? (
              <>
                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
                  >
                    <FaBell className="h-4 w-4" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">2</span>
                    </span>
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  </button>
                  {/* Notifications Dropdown */}
                  {showNotifications && (
                    <div className="absolute right-0 top-full mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 animate-in slide-in-from-top-5 duration-300">
                      <div className="p-4 border-b border-gray-100/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                        <h3 className="font-bold text-gray-900 text-lg">Notifications</h3>
                        <p className="text-sm text-gray-600">You have 2 unread notifications</p>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-50/50 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-200 ${
                              notification.unread ? 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50' : ''
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              {notification.unread && (
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                              )}
                              <div className="flex-1">
                                <p className="text-sm text-gray-900 font-medium">{notification.text}</p>
                                <p className="text-xs text-gray-500 mt-1 font-medium">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-gray-50/30">
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all duration-200">
                          View all notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-3 px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <FaUser className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold text-gray-900">{userName ? userName : (userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'User')}</span>
                      <span className="text-xs text-gray-500 capitalize font-medium">{userRole || ''}</span>
                    </div>
                    <FaChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${showUserDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {/* User Dropdown Menu */}
                  {showUserDropdown && (
                    <div className="absolute right-0 top-full mt-3 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 animate-in slide-in-from-top-5 duration-300">
                      <div className="p-4 border-b border-gray-100/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                        <p className="font-semibold text-gray-900">{userName ? userName : (userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'User')}</p>
                        <p className="text-sm text-gray-600">{userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : ''}</p>
                      </div>
                      <div className="border-t border-gray-100/50">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-200"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl text-sm font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-white/30 bg-white/70 backdrop-blur-xl rounded-b-2xl mt-2 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {dashboardMode ? (
              <div className="flex items-center space-x-3 px-4 py-3">
                <span className="text-base font-semibold text-gray-900">Welcome, {userName || 'User'}!</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="p-2 text-red-600 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                  title="Sign Out"
                >
                  <FaSignOutAlt className="h-4 w-4" />
                </button>
              </div>
            ) : isAuthenticated ? (
              <>
                <div className="border-t border-gray-200/50 my-3"></div>
                <Link
                  to={userRole === 'student' ? '/student/dashboard' : '/faculty/dashboard'}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <div className="border-t border-gray-200/50 my-3"></div>
                <Link
                  to="/login"
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showUserDropdown || showNotifications) && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => {
            setShowUserDropdown(false);
            setShowNotifications(false);
          }}
        ></div>
      )}
    </header>
  );
};

export default Header;