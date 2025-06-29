import { useState } from 'react';
import { X, GraduationCap, Check } from 'lucide-react';

const WelcomePopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubscribed ? (
          <>
            <div className="text-center mb-6">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to EduWorld!
              </h2>
              <p className="text-gray-600">
                Get the latest updates on courses, admissions, and educational opportunities.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Subscribe to Newsletter
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Maybe later
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">
              You've been successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePopup; 