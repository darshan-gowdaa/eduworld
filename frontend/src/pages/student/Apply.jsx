import ApplicationForm from '../../components/forms/ApplicationForm';

const StudentApply = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Application Form
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Complete your application in three simple steps. We'll guide you through each section.
          </p>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default StudentApply; 