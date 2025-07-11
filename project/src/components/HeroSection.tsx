import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#EBF7E8] to-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex items-center bg-[#9BB893]/10 text-[#9BB893] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Award-Winning Dental Care
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Smile is Our
              <span className="text-[#9BB893] block">Priority</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience exceptional dental care with our team of dedicated professionals. 
              We combine advanced technology with compassionate care to give you the healthy, 
              beautiful smile you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-[#9BB893] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8BA885] transition-all duration-300 flex items-center justify-center group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </a>
              <button className="border-2 border-[#9BB893] text-[#9BB893] px-8 py-4 rounded-full font-medium hover:bg-[#9BB893] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#9BB893]/10 rounded-full mb-3 mx-auto">
                  <Users className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#9BB893]/10 rounded-full mb-3 mx-auto">
                  <Award className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#9BB893]/10 rounded-full mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Safe & Sterile</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="opacity-0 translate-x-8 transition-all duration-700 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-[#9BB893]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional dental care" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available Now</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-[#9BB893]" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-gray-700">Certified Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;