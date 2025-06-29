import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  title,
  subtitle,
  description,
  buttons = [],
  gradient = 'bg-gradient-to-br from-blue-900 via-blue-700 to-purple-800',
  backgroundElements = null,
  scrollIndicator = null,
  className = '',
  style = {},
  children
}) => {
  return (
    <section className={`relative ${gradient} text-white py-32 overflow-hidden ${className}`} style={style}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundElements || (
          <>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
          </>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {title && (
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {buttons.length > 0 && (
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {buttons.map((btn, idx) =>
                btn.href ? (
                  btn.href.startsWith('/') ? (
                    <Link
                      key={idx}
                      to={btn.href}
                      className={btn.className || 'bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg'}
                    >
                      {btn.icon && <span className="inline mr-2">{btn.icon}</span>}
                      {btn.text}
                    </Link>
                  ) : (
                    <a
                      key={idx}
                      href={btn.href}
                      className={btn.className || 'bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg'}
                      target="_blank" rel="noopener noreferrer"
                    >
                      {btn.icon && <span className="inline mr-2">{btn.icon}</span>}
                      {btn.text}
                    </a>
                  )
                ) : (
                  <button
                    key={idx}
                    className={btn.className || 'bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg'}
                    onClick={btn.onClick}
                  >
                    {btn.icon && <span className="inline mr-2">{btn.icon}</span>}
                    {btn.text}
                  </button>
                )
              )}
            </div>
          )}
          {children}
        </div>
      </div>
      {/* Scroll Indicator */}
      {scrollIndicator || (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          {/* Example: <FaChevronDown className="text-white text-2xl opacity-70" /> */}
        </div>
      )}
    </section>
  );
};

export default HeroSection; 