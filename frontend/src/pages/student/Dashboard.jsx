import { Link } from 'react-router-dom';
import { FaUserGraduate, FaFileAlt, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';

const StudentDashboard = () => {
  // In a real app, fetch user info from backend or context
  const userName = 'Student';

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome, {userName}!</h1>
          <p className="text-lg text-gray-600 mb-8">
            This is your student dashboard. Use the quick actions below to apply, check your application status, or send an enquiry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/student/apply" className="bg-blue-600 text-white rounded-lg p-6 flex flex-col items-center hover:bg-blue-700 transition-colors shadow">
              <FaFileAlt className="h-8 w-8 mb-2" />
              <span className="font-semibold">Apply Now</span>
            </Link>
            <Link to="/student/status" className="bg-green-600 text-white rounded-lg p-6 flex flex-col items-center hover:bg-green-700 transition-colors shadow">
              <FaCheckCircle className="h-8 w-8 mb-2" />
              <span className="font-semibold">View Status</span>
            </Link>
            <Link to="/contact" className="bg-yellow-500 text-white rounded-lg p-6 flex flex-col items-center hover:bg-yellow-600 transition-colors shadow">
              <FaQuestionCircle className="h-8 w-8 mb-2" />
              <span className="font-semibold">Enquiry</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard; 