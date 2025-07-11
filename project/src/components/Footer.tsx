import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-[#9BB893] font-bold text-xl">1D</span>
              </div>
              <span className="text-2xl font-bold text-white">1Dental</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Providing exceptional dental care with compassion and expertise. 
              Your smile is our priority, and we're committed to helping you 
              achieve optimal oral health.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#9BB893] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Team', 'Patient Info', 'Insurance', 'Reviews'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-[#9BB893] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#9BB893] mr-3 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#9BB893] mr-3 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-300">info@1dental.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#9BB893] mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-gray-300">
                  123 Dental Street<br />
                  Suite 100<br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 1 Dental. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#9BB893] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9BB893] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9BB893] text-sm transition-colors duration-300">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;