import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Megaphone, 
  ArrowRight, 
  Menu, 
  X, 
  Star,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Target,
  Users,
  Award,
  TrendingUp,
  Eye,
  MousePointer,
  BarChart3,
  Palette,
  Database,
  Shield,
  Rocket,
  Lightbulb,
  Briefcase,
  Settings,
  Clock,
  DollarSign,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  ShoppingCart,
  Search,
  Gauge,
  HeadphonesIcon,
  CheckCircle2,
  Percent,
  Calendar,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Website Development",
      discount: "40% OFF",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      discount: "50% OFF",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      discount: "30% OFF",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    }
  ];

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Website Design & Development",
      description: "Stunning, conversion-focused websites"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "eCommerce & Business Websites",
      description: "Powerful online stores and business platforms"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Android, iOS & Flutter applications"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "SEO, Google & Meta Ads, Social Media"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Lead Management Systems",
      description: "CRM Integration & automation"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Analytics Setup & speed optimization"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Project Manager",
      description: "Personal attention to your project"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery + After-Support",
      description: "Quick turnaround with ongoing support"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "100% Mobile-Responsive",
      description: "Perfect on all devices and screens"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable & Transparent",
      description: "Clear pricing with no hidden costs"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:text-pink-500" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", color: "hover:text-blue-500" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", color: "hover:text-sky-500" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform rotate-12">
                  <Rocket className="w-7 h-7 text-white transform -rotate-12" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  23 Trillion
                </span>
                <div className="text-xs text-gray-500 font-medium">Client Success Our Growth</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#offers" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Offers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-semibold">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors">Services</a>
              <a href="#offers" className="block py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors">Offers</a>
              <a href="#contact" className="block py-3 text-gray-700 font-medium hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            {/* Rocket Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl mb-8 transform hover:scale-110 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Take Your Business
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Online With Confidence
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Website Development | App Development | Product Development | Digital Marketing
            </div>
            <div className="text-lg text-blue-600 font-bold mb-8">
              All Under One Roof
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Need a powerful online presence? We build high-converting websites, custom mobile apps, 
              and marketing strategies that grow your brand fast. Whether you're a startup or scaling enterprise – we've got a solution for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91-8982998208</span>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-semibold">Trusted by 50+ Growing Businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-8 animate-float">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
            <Code2 className="w-10 h-10 text-white -rotate-12" />
          </div>
        </div>
        <div className="absolute top-48 right-12 animate-float-delayed">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl -rotate-12">
            <Smartphone className="w-8 h-8 text-white rotate-12" />
          </div>
        </div>
        <div className="absolute bottom-32 left-16 animate-float-slow">
          <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl rotate-45">
            <TrendingUp className="w-7 h-7 text-white -rotate-45" />
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-24 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Limited Time Only</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Special Offers
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Don't miss out on these incredible deals! Transform your business with our premium services at unbeatable prices.
            </p>
          </div>

          {/* Rotating Offers Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {offers.map((offer, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-500 ${
                  currentOffer === index ? 'scale-105 ring-4 ring-white/50' : 'hover:scale-105'
                }`}
              >
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  🔥 HOT DEAL
                </div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${offer.color}`}>
                  <div className="text-white">
                    {offer.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">{offer.discount}</div>
                <p className="text-gray-600 mb-6">Starting from our premium packages</p>
                
                <button className={`w-full bg-gradient-to-r ${offer.color} text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  Claim Offer Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Offers valid for limited time only!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Digital <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we provide end-to-end digital services that drive real business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <Settings className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Success is <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Our Priority</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-48 translate-y-48 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Ready to Grow?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Talk Business
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Book your free consultation now and claim your offer! Our experts are ready to transform your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Call Us Now</h3>
                    <p className="text-blue-200 text-lg">+91-8982998208</p>
                    <p className="text-sm text-blue-300">Free consultation available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                    <p className="text-purple-200 text-lg">info@23trillion.com</p>
                    <p className="text-sm text-purple-300">Quick response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Visit Website</h3>
                    <p className="text-green-200 text-lg">www.23trillion.com</p>
                    <p className="text-sm text-green-300">Explore our portfolio</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-6">Follow Us for Insights & Success Stories</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="+91-9876543210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300">
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="website" className="text-gray-900">Website Development</option>
                    <option value="app" className="text-gray-900">App Development</option>
                    <option value="marketing" className="text-gray-900">Digital Marketing</option>
                    <option value="complete" className="text-gray-900">Complete Package</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform rotate-12">
                  <Rocket className="w-7 h-7 text-white transform -rotate-12" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">23 Trillion</span>
                <div className="text-sm text-gray-400">Client Success Our Growth</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transforming businesses through innovative digital solutions. 
              Your success is our mission, and excellence is our standard.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700 hover:scale-110`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 23 Trillion. All rights reserved. Crafted with ❤️ for digital excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;