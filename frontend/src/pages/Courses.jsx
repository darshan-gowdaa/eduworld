import { useState, useEffect } from 'react';
import { Search, Clock, GraduationCap, Users, Star, Filter, ChevronDown, BookOpen, Award, TrendingUp, Heart } from 'lucide-react';
import CallToAction from '../components/common/CallToAction';
import HeroSection from '../components/common/HeroSection';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'computer-science', name: 'Computer Science', icon: BookOpen, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { id: 'business', name: 'Business', icon: TrendingUp, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'engineering', name: 'Engineering', icon: Award, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { id: 'arts', name: 'Arts & Humanities', icon: Heart, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
    { id: 'sciences', name: 'Sciences', icon: GraduationCap, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      category: 'computer-science',
      duration: '4 years',
      students: 450,
      rating: 4.8,
      price: 150000,
      originalPrice: 180000,
      description: 'Comprehensive program covering software development, algorithms, and computer systems with hands-on projects.',
      features: ['Industry Projects', 'AI/ML Focus', 'Internship Program', '100% Placement'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Popular',
      level: 'Undergraduate'
    },
    {
      id: 2,
      title: 'Master of Business Administration',
      category: 'business',
      duration: '2 years',
      students: 320,
      rating: 4.9,
      price: 200000,
      originalPrice: 220000,
      description: 'Advanced business management program with focus on leadership, strategy, and global business perspectives.',
      features: ['Case Studies', 'Global Exposure', 'Leadership Training', 'Startup Incubation'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Premium',
      level: 'Postgraduate'
    },
    {
      id: 3,
      title: 'Bachelor of Mechanical Engineering',
      category: 'engineering',
      duration: '4 years',
      students: 280,
      rating: 4.7,
      price: 170000,
      originalPrice: 190000,
      description: 'Engineering fundamentals with hands-on projects, industry collaboration, and cutting-edge research.',
      features: ['Lab Access 24/7', 'Industry Mentors', 'Research Projects', 'International Exchange'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Accredited',
      level: 'Undergraduate'
    },
    {
      id: 4,
      title: 'Bachelor of Arts in English',
      category: 'arts',
      duration: '4 years',
      students: 180,
      rating: 4.6,
      price: 90000,
      originalPrice: 100000,
      description: 'Explore literature, creative writing, critical thinking, and develop strong communication skills.',
      features: ['Creative Writing', 'Literary Analysis', 'Public Speaking', 'Media Studies'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Affordable',
      level: 'Undergraduate'
    },
    {
      id: 5,
      title: 'Bachelor of Science in Biology',
      category: 'sciences',
      duration: '4 years',
      students: 220,
      rating: 4.8,
      price: 120000,
      originalPrice: 140000,
      description: 'Study living organisms, genetics, ecology, and their interactions with advanced laboratory experience.',
      features: ['Modern Labs', 'Field Studies', 'Research Opportunities', 'Industry Partnerships'],
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Research Focus',
      level: 'Undergraduate'
    },
    {
      id: 6,
      title: 'Master of Data Science',
      category: 'computer-science',
      duration: '2 years',
      students: 150,
      rating: 4.9,
      price: 180000,
      originalPrice: 200000,
      description: 'Advanced analytics, machine learning, and AI for data-driven decision making in modern businesses.',
      features: ['Big Data Analytics', 'Machine Learning', 'AI Applications', 'Industry Capstone'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Hot',
      level: 'Postgraduate'
    }
  ];

  const toggleFavorite = (courseId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(courseId)) {
      newFavorites.delete(courseId);
    } else {
      newFavorites.add(courseId);
    }
    setFavorites(newFavorites);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'students': return b.students - a.students;
      default: return b.rating - a.rating;
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      filteredCourses.forEach((course, index) => {
        setTimeout(() => {
          setAnimatedCards(prev => new Set([...prev, course.id]));
        }, index * 100);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredCourses]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Popular': 'bg-gradient-to-r from-blue-500 to-purple-600',
      'Premium': 'bg-gradient-to-r from-yellow-400 to-orange-500',
      'Hot': 'bg-gradient-to-r from-red-500 to-pink-600',
      'Accredited': 'bg-gradient-to-r from-green-500 to-teal-600',
      'Affordable': 'bg-gradient-to-r from-indigo-500 to-blue-600',
      'Research Focus': 'bg-gradient-to-r from-purple-500 to-indigo-600'
    };
    return colors[badge] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Hero Section */}
      <HeroSection
        title={"Discover Your Future"}
        description={"Transform your potential into expertise with our world-class programs designed for tomorrow's leaders"}
        buttons={[]}
        gradient="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
        backgroundElements={
          <>
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </>
        }
      />

      {/* Enhanced Search and Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-center">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for courses, skills, or programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white shadow-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white shadow-lg shadow-purple-500/25`
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="students">Most Popular</option>
                </select>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-white p-6 rounded-xl shadow-lg border animate-fade-in-down">
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="300000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Up to {formatPrice(priceRange[1])}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, 300000]);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div
                  key={course.id}
                  className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                    animatedCards.has(course.id) ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                >
                  {/* Course Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold ${getBadgeColor(course.badge)}`}>
                      {course.badge}
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(course.id)}
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.has(course.id) ? 'text-red-500 fill-current' : 'text-white'
                        }`}
                      />
                    </button>
                    
                    {/* Level Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {course.level}
                    </div>
                  </div>
                  
                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                          +{course.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Course Stats */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-900">{course.rating}</span>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(course.price)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(course.originalPrice)}
                        </span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <CallToAction
        title={<span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Ready to Transform Your Future?</span>}
        description={"Join thousands of successful graduates who started their journey with us. Your future begins with a single step."}
        primaryBtn={{ text: 'Start Your Application', href: '/register', icon: <GraduationCap className="h-6 w-6 group-hover:rotate-12 transition-transform" /> }}
        secondaryBtn={{ text: 'Schedule a Call', href: '/contact', icon: <BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform" /> }}
        showTrust={false}
        gradient="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white"
      />
    </div>
  );
};

export default Courses;