import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Mail, MapPin, Clock, User } from 'lucide-react';

const CallButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+919113504966';
    setShowPopup(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919113504966?text=Hello! I have a question about EduWorld.', '_blank');
    setShowPopup(false);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:darshangowdaa223@gmail.com?subject=EduWorld Inquiry';
    setShowPopup(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && !event.target.closest('.contact-popup') && !event.target.closest('.contact-button')) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopup]);

  return (
    <>
      {/* Floating Contact Button */}
      <div className={`fixed bottom-28 right-6 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="relative">
          {/* Pulse animation ring */}
          <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse ${showPopup ? 'opacity-0' : 'opacity-75'}`}></div>
          
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="contact-button relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <div className={`transition-transform duration-300 ${showPopup ? 'rotate-45' : 'rotate-0'}`}>
              {showPopup ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
            </div>
          </button>

          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
            <span className="font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Contact Options Popup */}
      <div className={`fixed bottom-20 right-6 z-40 transition-all duration-300 ${showPopup ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="contact-popup bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 min-w-80 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-2">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Get in Touch</h3>
                <p className="text-sm text-gray-500">We're here to help!</p>
              </div>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleCall}
              className="w-full group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="font-semibold block">Call Now</span>
                <span className="text-sm opacity-90">Instant support</span>
              </div>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="w-full group flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="font-semibold block">WhatsApp</span>
                <span className="text-sm opacity-90">Quick chat</span>
              </div>
            </button>
            
            <button
              onClick={handleEmail}
              className="w-full group flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <span className="font-semibold block">Email Us</span>
                <span className="text-sm opacity-90">Detailed inquiry</span>
              </div>
            </button>
          </div>

          {/* Quick Response Promise */}
          <div className=" p-3 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-emerald-800 font-medium text-center">
              ⚡ Quick Response Guaranteed
            </p>
            <p className="text-xs text-emerald-600 text-center mt-1">
              We typically respond within 15 minutes
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 transition-opacity duration-300" />
      )}
    </>
  );
};

export default CallButton;