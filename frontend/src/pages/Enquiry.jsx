import EnquiryForm from '../components/forms/EnquiryForm';

const Enquiry = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Enquiry Form</h1>
        <p className="text-lg text-gray-600 mb-8">Have a question or need more information? Fill out the form below and our team will get back to you soon.</p>
        <EnquiryForm />
      </div>
    </div>
  );
};

export default Enquiry; 