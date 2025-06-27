import { useState, useEffect } from 'react';
import { FaGraduationCap, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    students: 0,
    faculty: 0,
    courses: 0,
    countries: 0
  });

  const stats = [
    {
      icon: FaGraduationCap,
      number: 15000,
      label: "Students Enrolled",
      color: "text-blue-600"
    },
    {
      icon: FaUsers,
      number: 500,
      label: "Expert Faculty",
      color: "text-green-600"
    },
    {
      icon: FaTrophy,
      number: 200,
      label: "Courses Offered",
      color: "text-purple-600"
    },
    {
      icon: FaGlobe,
      number: 50,
      label: "Countries Represented",
      color: "text-orange-600"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          students: Math.floor(15000 * progress),
          faculty: Math.floor(500 * progress),
          courses: Math.floor(200 * progress),
          countries: Math.floor(50 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          EduWorld by the Numbers
        </h2>
        <p className="text-xl text-gray-600">
          Discover the impact we've made in education
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-white rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300">
          <FaGraduationCap className={`h-12 w-12 mx-auto mb-4 ${stats[0].color}`} />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {counts.students.toLocaleString()}+
          </div>
          <div className="text-gray-600 font-medium">
            {stats[0].label}
          </div>
        </div>

        <div className="text-center p-6 bg-white rounded-3xl border-2 border-green-100 shadow-xl hover:shadow-2xl hover:border-green-300 transition-all duration-300">
          <FaUsers className={`h-12 w-12 mx-auto mb-4 ${stats[1].color}`} />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {counts.faculty}+
          </div>
          <div className="text-gray-600 font-medium">
            {stats[1].label}
          </div>
        </div>

        <div className="text-center p-6 bg-white rounded-3xl border-2 border-purple-100 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
          <FaTrophy className={`h-12 w-12 mx-auto mb-4 ${stats[2].color}`} />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {counts.courses}+
          </div>
          <div className="text-gray-600 font-medium">
            {stats[2].label}
          </div>
        </div>

        <div className="text-center p-6 bg-white rounded-3xl border-2 border-orange-100 shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all duration-300">
          <FaGlobe className={`h-12 w-12 mx-auto mb-4 ${stats[3].color}`} />
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {counts.countries}+
          </div>
          <div className="text-gray-600 font-medium">
            {stats[3].label}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Animated Gradient Card: Employment Rate */}
        <div className="relative flex flex-col items-center justify-center aspect-square rounded-3xl border-4 border-blue-200 shadow-2xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-blue-400 w-40 h-40 md:w-48 md:h-48 mx-auto">
          <div className="absolute inset-0 animate-gradient-move bg-[linear-gradient(120deg,#60a5fa,#38bdf8,#a5b4fc,#60a5fa)] bg-[length:200%_200%] opacity-90 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative z-10 text-center text-white p-4 md:p-6">
            <div className="text-3xl font-extrabold mb-2 drop-shadow-lg">95%</div>
            <div className="text-blue-100 font-semibold drop-shadow">Employment Rate</div>
          </div>
        </div>
        {/* Animated Gradient Card: Scholarships */}
        <div className="relative flex flex-col items-center justify-center aspect-square rounded-3xl border-4 border-green-200 shadow-2xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-green-400 w-40 h-40 md:w-48 md:h-48 mx-auto">
          <div className="absolute inset-0 animate-gradient-move bg-[linear-gradient(120deg,#34d399,#38bdf8,#a7f3d0,#34d399)] bg-[length:200%_200%] opacity-90 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative z-10 text-center text-white p-4 md:p-6">
            <div className="text-3xl font-extrabold mb-2 drop-shadow-lg">₹415 Cr+</div>
            <div className="text-green-100 font-semibold drop-shadow">Scholarships Awarded</div>
          </div>
        </div>
        {/* Animated Gradient Card: Years of Excellence */}
        <div className="relative flex flex-col items-center justify-center aspect-square rounded-3xl border-4 border-purple-200 shadow-2xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:border-purple-400 w-40 h-40 md:w-48 md:h-48 mx-auto">
          <div className="absolute inset-0 animate-gradient-move bg-[linear-gradient(120deg,#a78bfa,#818cf8,#f472b6,#a78bfa)] bg-[length:200%_200%] opacity-90 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative z-10 text-center text-white p-4 md:p-6">
            <div className="text-3xl font-extrabold mb-2 drop-shadow-lg">25+</div>
            <div className="text-purple-100 font-semibold drop-shadow">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Keyframes */}
      <style jsx>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StatsSection; 