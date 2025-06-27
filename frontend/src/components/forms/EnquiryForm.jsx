import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const courses = [
  'Bachelor of Computer Science',
  'Master of Business Administration',
  'Bachelor of Mechanical Engineering',
  'Bachelor of Arts in English',
  'Bachelor of Science in Biology',
  'Master of Data Science'
];

const EnquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:5000/api/enquiries', {
        ...data,
        date: new Date().toISOString().slice(0, 10)
      });
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setError('Failed to submit enquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 flex items-center">
          <FaCheckCircle className="mr-2" />
          Thank you! Your enquiry has been submitted. We will contact you soon.
        </div>
      )}
      {error && (
        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4 text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input {...register('name', { required: 'Name is required' })} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input {...register('email', { required: 'Email is required' })} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input {...register('phone', { required: 'Phone is required' })} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your phone number" />
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
            <select {...register('course', { required: 'Please select a course' })} className="w-full px-3 py-2 border rounded-md">
              <option value="">Select a course</option>
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.course && <p className="text-red-600 text-xs mt-1">{errors.course.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })} rows={5} className="w-full px-3 py-2 border rounded-md" placeholder="Enter your message" />
          {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {isLoading ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm; 