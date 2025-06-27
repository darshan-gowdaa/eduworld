import { useEffect, useState } from 'react';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';

const StatusCard = ({ status }) => {
  let icon, color, label;
  switch (status) {
    case 'approved':
      icon = <FaCheckCircle className="h-8 w-8 text-green-500" />;
      color = 'text-green-700';
      label = 'Approved';
      break;
    case 'pending':
      icon = <FaHourglassHalf className="h-8 w-8 text-yellow-500" />;
      color = 'text-yellow-700';
      label = 'Pending';
      break;
    case 'rejected':
      icon = <FaTimesCircle className="h-8 w-8 text-red-500" />;
      color = 'text-red-700';
      label = 'Rejected';
      break;
    default:
      icon = <FaHourglassHalf className="h-8 w-8 text-gray-400" />;
      color = 'text-gray-700';
      label = 'Not Applied';
  }
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      {icon}
      <span className={`mt-2 text-xl font-bold ${color}`}>{label}</span>
    </div>
  );
};

const StudentStatus = () => {
  const [status, setStatus] = useState('pending');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/applications/mine', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStatus(res.data.status || 'pending');
      } catch (err) {
        setError('Failed to fetch application status.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Application Status</h1>
        {isLoading && <div className="text-center text-blue-600">Loading status...</div>}
        {error && <div className="text-center text-red-600 mb-4">{error}</div>}
        <StatusCard status={status} />
        <div className="mt-8 text-gray-600 text-center">
          <p>Your application is currently <span className="font-semibold">{status}</span>.</p>
          <p className="mt-2">You will be notified by email once your application is reviewed.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentStatus; 