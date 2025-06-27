import React from "react";

// Icons can be passed as props or imported here
import { ChevronRight, BookOpen, Star, Award, GraduationCap } from "lucide-react";

const CallToAction = ({
  title = "Ready to Start Your Journey?",
  description = "Join thousands of students who have already taken the first step towards their future. Apply now and secure your place in our next intake with early bird benefits.",
  primaryBtn = { text: "Apply Now", onClick: null, href: "/register", icon: <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> },
  secondaryBtn = { text: "Explore Courses", onClick: null, href: "/courses", icon: <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" /> },
  showTrust = true,
  trustIndicators = [
    { icon: <Star className="w-5 h-5 text-yellow-400 fill-current" />, text: "4.9/5 Student Rating" },
    { icon: <Award className="w-5 h-5 text-yellow-400" />, text: "Accredited Programs" }
  ],
  gradient = "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800",
  className = "",
  children
}) => {
  return (
    <section className={`py-20 ${gradient} relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {primaryBtn && (
            primaryBtn.href ? (
              <a
                href={primaryBtn.href}
                className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={primaryBtn.onClick}
              >
                {primaryBtn.text}
                {primaryBtn.icon}
              </a>
            ) : (
              <button
                className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={primaryBtn.onClick}
              >
                {primaryBtn.text}
                {primaryBtn.icon}
              </button>
            )
          )}
          {secondaryBtn && (
            secondaryBtn.href ? (
              <a
                href={secondaryBtn.href}
                className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                onClick={secondaryBtn.onClick}
              >
                {secondaryBtn.text}
                {secondaryBtn.icon}
              </a>
            ) : (
              <button
                className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                onClick={secondaryBtn.onClick}
              >
                {secondaryBtn.text}
                {secondaryBtn.icon}
              </button>
            )
          )}
        </div>
        {showTrust && trustIndicators && (
          <div className="mt-12 flex items-center justify-center space-x-8 text-blue-200">
            {trustIndicators.map((item, idx) => (
              <div className="flex items-center" key={idx}>
                {item.icon}
                <span className="ml-2">{item.text}</span>
                {idx !== trustIndicators.length - 1 && (
                  <span className="hidden sm:block w-px h-6 bg-blue-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default CallToAction; 