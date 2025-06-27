import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Welcome to EduWorld",
      subtitle: "Empowering Students for a Brighter Future",
      description: "Join thousands of students who have transformed their lives through our innovative educational programs.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore Courses",
      buttonLink: "/courses"
    },
    {
      id: 2,
      title: "Quality Education",
      subtitle: "Learn from Industry Experts",
      description: "Our faculty consists of experienced professionals and researchers with expertise in their respective fields.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      buttonText: "Meet Our Faculty",
      buttonLink: "/about"
    },
    {
      id: 3,
      title: "Modern Campus",
      subtitle: "State-of-the-Art Facilities",
      description: "Experience learning in our modern campus with cutting-edge laboratories, libraries, and study spaces.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Virtual Tour",
      buttonLink: "/about"
    },
    {
      id: 4,
      title: "Career Success",
      subtitle: "High Employment Rates",
      description: "Our graduates achieve remarkable success with excellent job placement rates and career advancement opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Apply Now",
      buttonLink: "/register"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === currentSlide ? 'bg-white' : 'bg-white/50'
      }`} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="relative h-screen">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-screen">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
          aria-label="Previous Slide"
        >
          <FaArrowLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          onClick={() => sliderRef.current && sliderRef.current.slickNext()}
          aria-label="Next Slide"
        >
          <FaArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slick-dots {
          bottom: 30px;
        }
        .slick-dots li {
          margin: 0 5px;
        }
        .slick-dots li button:before {
          display: none;
        }
        .slick-prev,
        .slick-next {
          display: none !important;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider; 