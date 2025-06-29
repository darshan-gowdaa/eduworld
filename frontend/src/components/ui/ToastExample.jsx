import React from 'react';
import { showToast } from './Toast';

const ToastExample = () => {
  const handleSuccessToast = () => {
    showToast.success('Operation completed successfully!');
  };

  const handleErrorToast = () => {
    showToast.error('Something went wrong. Please try again.');
  };

  const handleWarningToast = () => {
    showToast.warning('Please check your input before proceeding.');
  };

  const handleInfoToast = () => {
    showToast.info('Here is some useful information for you.');
  };

  const handleCustomToast = () => {
    showToast.custom('This is a custom toast message!', 'success', {
      position: 'bottom-center',
      autoClose: 5000
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">Toast Notification Examples</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={handleSuccessToast}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Success Toast
        </button>
        
        <button
          onClick={handleErrorToast}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Error Toast
        </button>
        
        <button
          onClick={handleWarningToast}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Warning Toast
        </button>
        
        <button
          onClick={handleInfoToast}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Info Toast
        </button>
        
        <button
          onClick={handleCustomToast}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Custom Toast
        </button>
      </div>
    </div>
  );
};

export default ToastExample; 