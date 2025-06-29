import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Trophy, Globe, ChevronRight, Star, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/common/CallToAction';
import WelcomePopup from '../components/common/WelcomePopup';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  const heroSlides = [
    {
      title: "Transform Your Future with Quality Education",
      subtitle: "Join thousands of students who have already started their journey to success",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      cta: "Start Your Journey",
      link: "/register"
    },
    {
      title: "Learn from Industry Experts",
      subtitle: "Our faculty brings real-world experience directly to your classroom",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      cta: "Meet Our Faculty",
      link: "/about"
    },
    {
      title: "Global Recognition, Local Excellence",
      subtitle: "Degrees recognized worldwide with personalized attention",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      cta: "Explore Programs",
      link: "/courses"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Worldwide", icon: Users },
    { number: "95%", label: "Employment Rate", icon: Trophy },
    { number: "200+", label: "Expert Faculty", icon: BookOpen },
    { number: "50+", label: "Countries", icon: Globe }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show popup after 5 seconds if not already shown in this session
    if (!localStorage.getItem('newsletterPopupShown')) {
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Newsletter Popup */}
      {showWelcomePopup && (
        <WelcomePopup onClose={() => setShowWelcomePopup(false)} />
      )}

      {/* Enhanced Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
              style={{
                transform: index === currentSlide 
                  ? 'translateX(0)' 
                  : index < currentSlide 
                    ? 'translateX(-100%)' 
                    : 'translateX(100%)',
                transition: 'all 1s ease-in-out'
              }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-purple-900/80" />
              
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link 
                    to={slide.link}
                    className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EduWorld</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering students with quality education and innovative learning experiences. 
              Join thousands of students who have transformed their lives through our comprehensive programs designed for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Quality Education",
                description: "Our programs are designed by industry experts and delivered by experienced faculty members with cutting-edge curriculum.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Diverse Community",
                description: "Join a vibrant community of students from around the world with diverse backgrounds, perspectives, and experiences.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Trophy,
                title: "Career Success",
                description: "Our graduates have achieved remarkable success in their careers with industry-leading employment rates and career advancement.",
                color: "from-indigo-500 to-indigo-600"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <CallToAction
        title={<span>Ready to Start Your <span className="text-yellow-300">Journey?</span></span>}
        description="Join thousands of students who have already taken the first step towards their future. Apply now and secure your place in our next intake with early bird benefits."
        primaryBtn={{ text: 'Apply Now', href: '/register', icon: <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> }}
        secondaryBtn={{ text: 'Explore Courses', href: '/courses', icon: <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" /> }}
        showTrust={true}
        trustIndicators={[
          { icon: <Star className="w-5 h-5 text-yellow-400 fill-current" />, text: '4.9/5 Student Rating' },
          { icon: <Award className="w-5 h-5 text-yellow-400" />, text: 'Accredited Programs' }
        ]}
        gradient="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
      />

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EduWorld?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for students worldwide seeking excellence in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Recognition",
                description: "Our degrees are recognized worldwide, opening doors to international opportunities and career advancement.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Learn from industry professionals and experienced educators who bring real-world insights to the classroom.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Trophy,
                title: "Modern Facilities",
                description: "State-of-the-art laboratories, libraries, and learning spaces equipped with the latest technology and resources.",
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                icon: GraduationCap,
                title: "Career Support",
                description: "Comprehensive career services and job placement assistance with dedicated support throughout your journey.",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-blue-200"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;