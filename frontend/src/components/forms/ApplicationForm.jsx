import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FaUser, FaGraduationCap, FaBook, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const steps = [
  { label: 'Personal Info', icon: <FaUser /> },
  { label: 'Academic Details', icon: <FaGraduationCap /> },
  { label: 'Course Selection', icon: <FaBook /> }
];

const ApplicationForm = () => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const methods = useForm({ mode: 'onTouched' });
  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/applications',
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsSubmitted(true);
    } catch {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white p-10 rounded-lg shadow-lg text-center py-12">
        <FaCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
        <p className="text-gray-700 text-lg">Thank you for applying. We will review your application and notify you by email.</p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-10">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s.label} className="flex-1 flex flex-col items-center relative">
              <div
                className={`rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold border-4 transition-colors duration-300 cursor-pointer
                  ${i === step ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : i < step ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-400 border-gray-300'}
                  hover:scale-110`}
                onClick={() => setStep(i)}
                aria-label={`Step ${i + 1}: ${s.label}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setStep(i); }}
              >
                {s.icon}
              </div>
              <span className={`mt-3 text-sm font-semibold select-none ${i <= step ? 'text-blue-700' : 'text-gray-400'}`}>
                {s.label}
              </span>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className={`absolute top-6 right-0 w-full h-1 transform translate-x-1/2 -z-10
                    ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`}
                  style={{ left: 'calc(100% + 1rem)', right: '-50%' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Step Content */}
        {step === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Full Name', name: 'personalInfo.fullName', type: 'text', placeholder: 'Enter your full name', required: 'Full name is required' },
              { label: 'Email', name: 'personalInfo.email', type: 'email', placeholder: 'Enter your email', required: 'Email is required' },
              { label: 'Phone', name: 'personalInfo.phone', type: 'tel', placeholder: 'Enter your phone number', required: 'Phone is required' },
              { label: 'Date of Birth', name: 'personalInfo.dob', type: 'date', required: 'Date of birth is required' }
            ].map(({ label, name, type, placeholder, required }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name, { required })}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors?.personalInfo?.[name.split('.')[1]] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.personalInfo?.[name.split('.')[1]] && (
                  <p className="text-red-600 text-xs mt-1">{errors.personalInfo[name.split('.')[1]].message}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Highest Qualification', name: 'academicInfo.qualification', placeholder: 'e.g. High School, Bachelors', required: 'Qualification is required' },
              { label: 'Institution Name', name: 'academicInfo.institution', placeholder: 'Enter institution name', required: 'Institution is required' },
              { label: 'Year of Passing', name: 'academicInfo.year', type: 'number', placeholder: 'e.g. 2023', required: 'Year is required' },
              { label: 'Percentage / GPA', name: 'academicInfo.score', placeholder: 'e.g. 85% or 3.8 GPA', required: 'Score is required' }
            ].map(({ label, name, placeholder, required, type = 'text' }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name, { required })}
                  className={`w-full px-4 py-3 border rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors?.academicInfo?.[name.split('.')[1]] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.academicInfo?.[name.split('.')[1]] && (
                  <p className="text-red-600 text-xs mt-1">{errors.academicInfo[name.split('.')[1]].message}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
              <select
                {...register('courseSelected', { required: 'Please select a course' })}
                className={`w-full px-4 py-3 border rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.courseSelected ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select a course</option>
                <option value="bcs">Bachelor of Computer Science</option>
                <option value="mba">Master of Business Administration</option>
                <option value="bme">Bachelor of Mechanical Engineering</option>
                <option value="ba-english">Bachelor of Arts in English</option>
                <option value="bsc-biology">Bachelor of Science in Biology</option>
                <option value="mds">Master of Data Science</option>
              </select>
              {errors.courseSelected && <p className="text-red-600 text-xs mt-1">{errors.courseSelected.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Intake</label>
              <select
                {...register('intake', { required: 'Please select an intake' })}
                className={`w-full px-4 py-3 border rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${errors.intake ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select intake</option>
                <option value="fall">Fall</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
              </select>
              {errors.intake && <p className="text-red-600 text-xs mt-1">{errors.intake.message}</p>}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0 || isLoading}
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
          >
            <FaArrowLeft /> Back
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Next <FaArrowRight />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ApplicationForm; 