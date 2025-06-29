import { useState } from 'react';
import { User, GraduationCap, X } from 'lucide-react';

const UserTypePopup = ({ isOpen, onClose, onUserTypeSelect, mode = 'login' }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    onUserTypeSelect(type);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          <p className="text-white/80">
            Select your account type to continue
          </p>
        </div>

        {/* User type options */}
        <div className="space-y-4">
          <button
            onClick={() => handleTypeSelect('student')}
            className="w-full group relative flex cursor-pointer rounded-lg border p-6 shadow-lg hover:shadow-xl transition duration-200 backdrop-blur-sm border-white/30 bg-white/10 hover:border-blue-400/60 hover:bg-blue-500/20"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/50 transition-colors">
                  <User className="h-6 w-6 text-blue-300" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-white">Student</h3>
                <p className="text-sm text-white/70">Current or prospective student</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleTypeSelect('faculty')}
            className="w-full group relative flex cursor-pointer rounded-lg border p-6 shadow-lg hover:shadow-xl transition duration-200 backdrop-blur-sm border-white/30 bg-white/10 hover:border-blue-400/60 hover:bg-blue-500/20"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center group-hover:bg-green-500/50 transition-colors">
                  <GraduationCap className="h-6 w-6 text-green-300" />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-white">Faculty</h3>
                <p className="text-sm text-white/70">Staff or faculty member</p>
              </div>
            </div>
          </button>
        </div>

        {/* Cancel button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTypePopup; 