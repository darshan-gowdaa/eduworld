import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Hourglass, XCircle, Eye, ArrowLeft } from 'lucide-react';
import axios from 'axios';

// A more visually distinct status component
const StatusDisplay = ({ status }) => {
  const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center gap-x-1.5";
  switch (status) {
    case 'approved':
      return (
        <span className={`${baseClasses} bg-green-100 text-green-800`}>
          <CheckCircle />
          Approved
        </span>
      );
    case 'pending':
      return (
        <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
          <Hourglass />
          Pending
        </span>
      );
    case 'rejected':
      return (
        <span className={`${baseClasses} bg-red-100 text-red-800`}>
          <XCircle />
          Rejected
        </span>
      );
    default:
      return (
        <span className={`${baseClasses} bg-gray-100 text-gray-800`}>
          <Hourglass />
          Unknown
        </span>
      );
  }
};

// Mock data for demonstration
const mockApplications = [
  {
    _id: '1',
    personalInfo: {
      fullName: 'Siri Gowda',
      email: 'siri.gowda@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Computer Science',
    status: 'approved',
    additionalInfo: 'Siri has excellent academic background and strong programming skills. She completed several coding bootcamps and has a portfolio of web development projects.',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    _id: '2',
    personalInfo: {
      fullName: 'Mahesh K',
      email: 'mahesh.k@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Data Science',
    status: 'rejected',
    additionalInfo: 'Mahesh lacks the required mathematics background for the Data Science program. Recommended to complete prerequisite courses before reapplying.',
    createdAt: '2024-01-14T14:20:00Z'
  },
  {
    _id: '3',
    personalInfo: {
      fullName: 'Rajesh K',
      email: 'rajesh.k@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Business Administration',
    status: 'pending',
    additionalInfo: 'Rajesh shows strong leadership potential and has relevant work experience in retail management.',
    createdAt: '2024-01-16T09:15:00Z'
  },
  {
    _id: '4',
    personalInfo: {
      fullName: 'Dhanush M',
      email: 'dhanush.m@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Computer Science',
    status: 'approved',
    additionalInfo: 'Dhanush has impressive coding skills demonstrated through his GitHub portfolio and previous internship experience.',
    createdAt: '2024-01-13T16:45:00Z'
  },
  {
    _id: '5',
    personalInfo: {
      fullName: 'Liya Joseph',
      email: 'liya.j@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Psychology',
    status: 'rejected',
    additionalInfo: 'Liya\'s application was rejected due to incomplete documentation and missing prerequisite courses.',
    createdAt: '2024-01-12T11:30:00Z'
  },
  {
    _id: '6',
    personalInfo: {
      fullName: 'James Dzosua',
      email: 'james.d@email.com',
      phone: '+91 9876543210'
    },
    courseSelected: 'Engineering',
    status: 'pending',
    additionalInfo: 'James has strong technical aptitude and relevant project experience in robotics.',
    createdAt: '2024-01-17T13:20:00Z'
  }
];

const FacultyApplications = () => {
  const navigate = useNavigate();
  // State management for applications, loading, errors, and modal visibility
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Effect to fetch data on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      setIsLoading(true);
      setError('');
      try {
        // It's recommended to store tokens securely, e.g., in HttpOnly cookies
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/applications', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Combine backend data with mock data
        const backendData = res.data || [];
        const combinedData = [...mockApplications, ...backendData];
        setApplications(combinedData);
      } catch (err) {
        // Use mock data as fallback when API fails
        setApplications(mockApplications);
        setError('Using demo data. API connection failed.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApplications();
  }, []);

  // Handlers for opening and closing the modal
  const handleView = (app) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Delay clearing the selected app to allow for the closing animation
    setTimeout(() => setSelectedApp(null), 300);
  };

  // Render the main component UI
  return (
    <div className="min-h-screen bg-gray-100/50 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/faculty/dashboard')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 hover:shadow-md border border-gray-200"
            >
              <ArrowLeft className="text-sm" />
              <span className="text-sm font-medium">Back to Dashboard</span>
            </button>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Student Applications</h1>
          <p className="text-gray-500 mt-1">Review and manage all submitted applications.</p>
        </header>

        {/* Loading and Error States */}
        {isLoading && <div className="text-center p-10 text-lg font-semibold text-blue-600">Loading applications...</div>}
        {error && <div className="text-center p-10 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>}

        {/* Applications Table */}
        {!isLoading && !error && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden ring-1 ring-gray-200/50">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id || app._id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{app.personalInfo?.fullName || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{app.personalInfo?.email || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-800">{app.courseSelected || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusDisplay status={app.status || 'pending'} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          className="inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all"
                          onClick={() => handleView(app)}
                        >
                          <Eye />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Application Details */}
      {showModal && selectedApp && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-xl shadow-2xl max-w-2xl w-full m-4 transform transition-all duration-300 ${showModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
                    <p className="text-sm text-gray-500">Submitted on {selectedApp.createdAt ? new Date(selectedApp.createdAt).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 -mt-2 -mr-2"
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
              </div>

              <div className="space-y-6 mt-6">
                {/* Personal Information Section */}
                <div>
                    <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="flex flex-col"><span className="text-gray-500">Full Name</span><span className="text-gray-900 font-medium">{selectedApp.personalInfo?.fullName || '-'}</span></div>
                        <div className="flex flex-col"><span className="text-gray-500">Email Address</span><span className="text-gray-900 font-medium">{selectedApp.personalInfo?.email || '-'}</span></div>
                        <div className="flex flex-col"><span className="text-gray-500">Phone Number</span><span className="text-gray-900 font-medium">{selectedApp.personalInfo?.phone || '-'}</span></div>
                    </div>
                </div>

                {/* Application Details Section */}
                <div>
                    <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Application Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                        <div className="flex flex-col"><span className="text-gray-500">Selected Course</span><span className="text-gray-900 font-medium">{selectedApp.courseSelected || '-'}</span></div>
                        <div className="flex flex-col"><span className="text-gray-500">Current Status</span><StatusDisplay status={selectedApp.status || 'pending'} /></div>
                    </div>
                </div>
                
                {/* Additional Information */}
                {selectedApp.additionalInfo && (
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 border-b pb-2 mb-4">Additional Information</h3>
                    <p className="bg-gray-50 p-4 rounded-lg text-gray-700 text-sm">{selectedApp.additionalInfo}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Modal Footer with Actions */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-xl flex justify-end gap-x-3">
                <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={closeModal}
                >
                    Close
                </button>
                {/* Add primary actions like Approve/Reject here if needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyApplications;