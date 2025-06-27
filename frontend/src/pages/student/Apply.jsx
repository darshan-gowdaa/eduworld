import ApplicationForm from '../../components/forms/ApplicationForm';

const StudentApply = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Application Form</h1>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default StudentApply; 