import { Link } from 'react-router-dom';
import { FaFileAlt, FaQuestionCircle, FaUserGraduate, FaUsers, FaEye, FaInbox } from 'react-icons/fa';

const stats = [
  { label: 'Applications', value: 120, icon: <FaFileAlt className="h-8 w-8 text-blue-600" /> },
  { label: 'Enquiries', value: 35, icon: <FaQuestionCircle className="h-8 w-8 text-yellow-500" /> },
  { label: 'Students', value: 1500, icon: <FaUserGraduate className="h-8 w-8 text-green-600" /> },
  { label: 'Faculty', value: 50, icon: <FaUsers className="h-8 w-8 text-purple-600" /> }
];

const FacultyDashboard = () => {

  const userName = 'Faculty';

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight drop-shadow-sm">Welcome, {userName}!</h1>
          <p className="text-lg text-gray-600 mb-8">
            This is your faculty dashboard. Here you can view applications, enquiries, and manage students.
          </p>

          {/* Modern Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center items-center">
            <Link
              to="/faculty/applications"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
            >
              <FaEye className="h-6 w-6 group-hover:scale-110 transition-transform" />
              View Applications
            </Link>
            <Link
              to="/faculty/enquiries"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105"
            >
              <FaInbox className="h-6 w-6 group-hover:scale-110 transition-transform" />
              View Enquiries
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl shadow-xl p-8 flex items-center space-x-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                {stat.icon}
                <div>
                  <div className="text-3xl font-extrabold text-gray-900 drop-shadow-sm">{stat.value}</div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default FacultyDashboard; 