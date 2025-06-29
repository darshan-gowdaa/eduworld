import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  Send, 
  MessageCircle, 
  Globe,
  Calendar,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import CallToAction from '../components/common/CallToAction';
import HeroSection from '../components/common/HeroSection';
import { showToast } from '../components/ui/Toast';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast.error('Please fix the errors in the form before submitting.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare payload to match backend expectations
      const payload = {
        name: formData.firstName + ' ' + formData.lastName,
        email: formData.email,
        phone: formData.phone,
        course: formData.subject,
        message: formData.message,
        preferredContact: formData.preferredContact,
        urgency: formData.urgency
      };
      // Send data to backend
      const response = await fetch('http://localhost:5000/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Failed to send enquiry');

      setIsSubmitted(true);
      showToast.success('Message sent successfully! We\'ll get back to you within 2 hours during business hours.');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      showToast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      subtitle: 'Call us directly',
      info: '+91 9113504966',
      subInfo: 'WhatsApp Available',
      color: 'blue',
      action: 'tel:+919113504966'
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Send us a message',
      info: 'darshangowdaa223@gmail.com',
      subInfo: 'Response within 24hrs',
      color: 'green',
      action: 'mailto:darshangowdaa223@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      subtitle: 'Visit our campus',
      info: 'Nagasandra, Bengaluru',
      subInfo: 'Karnataka - 560073',
      color: 'purple',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      subtitle: 'We\'re available',
      info: 'Mon-Fri: 9AM-6PM',
      subInfo: 'Sat: 10AM-4PM',
      color: 'orange',
      action: null
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond to inquiries within 2 hours during business hours and within 24 hours on weekends.'
    },
    {
      question: 'Can I schedule a campus visit?',
      answer: 'Yes! Contact us to schedule a personalized campus tour. We offer both in-person and virtual tour options.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please include your program of interest, preferred start date, and any specific questions you have about admissions or academics.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <HeroSection
        title={"Get In Touch"}
        description={"We're here to help you take the next step in your educational journey. Reach out and let's start a conversation."}
        buttons={[]}
        gradient="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"
        backgroundElements={
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-bounce opacity-10"></div>
          </>
        }
      />

      {/* Enhanced Contact Methods */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center h-full`}>
                  <div className={`bg-${method.color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`h-8 w-8 text-${method.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.subtitle}</p>
                  {/* Only render info/subInfo for non-Hours cards */}
                  {method.title !== 'Hours' && (
                    <>
                      <p className="font-semibold text-gray-900 mb-1">{method.info}</p>
                      <p className="text-sm text-gray-500 mb-4">{method.subInfo}</p>
                    </>
                  )}
                  {/* Enhanced Action Button Logic */}
                  {method.action && method.action !== '#' ? (
                    <a
                      href={method.action}
                      aria-label={`Connect via ${method.title}`}
                      className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-${method.color}-500 to-${method.color}-600 text-white shadow-md hover:from-${method.color}-600 hover:to-${method.color}-700 focus:outline-none focus:ring-2 focus:ring-${method.color}-400 transition-all duration-200 mt-auto`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : method.title === 'Address' ? (
                    <button
                      className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold bg-gray-200 text-gray-500 cursor-not-allowed mt-auto"
                      disabled
                      aria-label="No map link available"
                    >
                      View on Map
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  ) : method.title === 'Hours' ? (
                    <div className="mt-4 flex flex-col items-center">
                      <span className={`inline-flex items-center gap-2 px-4 py-1 rounded-full bg-${method.color}-50 text-${method.color}-700 font-medium text-sm`}>
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="font-bold">Mon-Fri: 9AM-6PM</span>
                      </span>
                      <span className="text-xs text-gray-700 mt-1 font-bold">Sat: 10AM-4PM</span>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center animate-fade-in">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you within 2 hours during business hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academic">Academic Programs</option>
                      <option value="financial">Financial Aid</option>
                      <option value="campus">Campus Life</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="low">Low Priority</option>
                      <option value="normal">Normal Priority</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <Phone className="h-4 w-4 mr-1" />
                      Phone
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message}</p>
                    )}
                    <p className="text-sm text-gray-500 ml-auto">
                      {formData.message.length}/500 characters
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Interactive Map */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                  <div className="text-center z-10">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-gray-800">Interactive Map</p>
                    <p className="text-gray-600">Nagasandra, Bengaluru</p>
                    <p className="text-gray-600">Karnataka - 560073</p>
                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-4 text-gray-600 bg-gray-50 rounded-b-xl">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6 text-blue-100">
                  Our support team is available to assist you right away.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919113504966"
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3" />
                      <span>Call Now</span>
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/919113504966"
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-3" />
                      <span>WhatsApp</span>
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button className="w-full flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Start Your Journey?"
        description="Contact our admissions team to learn more about our programs and begin your application process."
        primaryBtn={{ text: 'Apply Now', href: '/register' }}
        secondaryBtn={{ text: 'Explore Courses', href: '/courses' }}
        showTrust={false}
        gradient="bg-blue-600"
      />
    </div>
  );
};

export default Contact;