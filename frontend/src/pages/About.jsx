import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, Trophy, Globe, Lightbulb, Heart, ChevronDown, Play, Star, Quote, } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/common/CallToAction';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const timelineRefs = useRef([]);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-select timeline card on scroll
  useEffect(() => {
    const handleTimelineScroll = () => {
      if (!timelineRefs.current.length) return;
      const offsets = timelineRefs.current.map(ref => {
        if (!ref) return Infinity;
        const rect = ref.getBoundingClientRect();
        // Distance from top of viewport (or container)
        return Math.abs(rect.top - window.innerHeight * 0.25);
      });
      const minIndex = offsets.indexOf(Math.min(...offsets));
      setActiveTimeline(minIndex);
    };
    window.addEventListener('scroll', handleTimelineScroll);
    return () => window.removeEventListener('scroll', handleTimelineScroll);
  }, []);

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Computer Science Graduate",
      text: "EduWorld transformed my understanding of technology and opened doors I never imagined possible.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
    },
    {
      name: "Priya Patel",
      role: "Business Administration Alumni",
      text: "The global perspective and innovative teaching methods prepared me for leadership roles in international companies.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
    },
    {
      name: "Rohan Verma",
      role: "Engineering Student",
      text: "The hands-on approach and cutting-edge facilities make learning engaging and practical.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
    }
  ];

  const timelineEvents = [
    { year: '1999', title: 'Founded', desc: 'EduWorld was established with a vision to transform education.', color: 'blue' },
    { year: '2005', title: 'Expansion', desc: 'Added new programs and modern campus facilities.', color: 'green' },
    { year: '2015', title: 'Global Reach', desc: 'Established international partnerships and online programs.', color: 'purple' },
    { year: '2024', title: 'Innovation', desc: 'Leading the future of education with cutting-edge technology.', color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800 text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About EduWorld
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering students worldwide with quality education and innovative learning experiences since 1999.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="inline mr-2" />
                Watch Our Story
              </button>
              <Link 
                to="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white text-2xl opacity-70" />
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="transform transition-all duration-500 hover:translate-x-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
                  Our Mission
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To provide accessible, high-quality education that empowers students to achieve their full potential 
                  and make meaningful contributions to society. We believe that education is the foundation for 
                  personal growth, professional success, and positive change in the world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through innovative teaching methods, experienced faculty, and modern facilities, we create an 
                  environment where learning thrives and dreams become reality.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:rotate-1 hover:scale-105">
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be the leading educational institution recognized globally for academic excellence, 
                  innovation, and commitment to student success.
                </p>
                <div className="absolute top-4 right-4 opacity-20">
                  <Lightbulb className="text-6xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Our Core Values
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 mt-6">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'Embracing new technologies and teaching methods to enhance learning experiences.', color: 'yellow', bg: 'from-yellow-400 to-orange-500' },
              { icon: Heart, title: 'Excellence', desc: 'Maintaining the highest standards in education, research, and student support.', color: 'red', bg: 'from-red-400 to-pink-500' },
              { icon: Users, title: 'Diversity', desc: 'Celebrating and embracing diverse perspectives, cultures, and backgrounds.', color: 'blue', bg: 'from-blue-400 to-cyan-500' },
              { icon: GraduationCap, title: 'Integrity', desc: 'Upholding ethical standards and academic honesty in all our endeavors.', color: 'green', bg: 'from-green-400 to-emerald-500' },
              { icon: Globe, title: 'Global Perspective', desc: 'Preparing students for success in an interconnected world.', color: 'purple', bg: 'from-purple-400 to-violet-500' },
              { icon: Trophy, title: 'Achievement', desc: 'Supporting students in reaching their goals and realizing their potential.', color: 'orange', bg: 'from-orange-400 to-red-500' }
            ].map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`relative z-10 bg-gradient-to-br ${value.bg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">A timeline of growth and excellence</p>
          </div>

          <div className="relative" ref={timelineContainerRef}>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full"></div>
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                ref={el => timelineRefs.current[index] = el}
                className={`relative mb-16 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'} w-1/2 group cursor-pointer`}
                onClick={() => setActiveTimeline(index)}
              >
                <div className={`absolute top-4 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 group-hover:scale-150 transition-transform duration-300`}></div>
                <div className={`bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-40 group-hover:bg-opacity-90 transition-all duration-300 ${activeTimeline === index ? 'ring-2 ring-blue-400 scale-105' : ''}`}>
                  <div className="text-3xl font-bold text-blue-700 mb-2">{event.year}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                  <p className="text-gray-800">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our global community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="text-6xl text-blue-500" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-400" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries guiding our institution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Ananya Iyer', role: 'President & CEO', desc: 'Leading EduWorld with over 20 years of experience in higher education.', gradient: 'from-blue-500 to-blue-600', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80' },
              { name: 'Prof. Rajesh Nair', role: 'Academic Dean', desc: 'Overseeing academic excellence and curriculum development.', gradient: 'from-green-500 to-green-600', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80' },
              { name: 'Dr. Meera Desai', role: 'Student Affairs Director', desc: 'Ensuring student success and well-being across all programs.', gradient: 'from-purple-500 to-purple-600', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80' }
            ].map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              >
                <div className={`bg-gradient-to-r ${leader.gradient} h-48 relative overflow-hidden`}>
                  <img src={leader.img} alt={leader.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300" style={{objectPosition: 'center 35%'}} />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Users className="text-white text-2xl" />
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <CallToAction
        title={<span>Join Our Community</span>}
        description={"Be part of our mission to transform education and empower the next generation of leaders. Your journey to excellence starts here."}
        primaryBtn={{ text: 'Apply Now', href: '/register' }}
        secondaryBtn={{ text: 'Contact Us', href: '/contact' }}
        showTrust={false}
        gradient="bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900"
      />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;