import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-[#9BB893]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to better oral health? Contact us today 
            to schedule your appointment or ask any questions. New patients can 
            <a 
              href="https://img1.wsimg.com/blobby/go/9ae7107c-1949-46c1-aaa8-0e70444dd8af/downloads/Dental_Patient_Registration%20copy.pdf?ver=1749454730571" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9BB893] hover:text-[#8BA885] font-medium underline decoration-2 underline-offset-2 transition-colors duration-300 mx-1"
            >
              download our intake form
            </a>
            to save time during your first visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0 translate-x-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EBF7E8] rounded-2xl mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EBF7E8] rounded-2xl mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@1dental.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EBF7E8] rounded-2xl mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">123 Dental Street<br />Suite 100<br />City, State 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 bg-[#EBF7E8] rounded-2xl mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#9BB893] rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-3">Emergency Care</h4>
              <p className="text-white/90 mb-4">
                Dental emergencies can happen anytime. We provide 24/7 emergency 
                dental services for urgent situations.
              </p>
              <button className="bg-white text-[#9BB893] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                Emergency Hotline: (555) 911-HELP
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0 translate-x-8 delay-300">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300">
                    <option>Select a service</option>
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Restorative Care</option>
                    <option>Emergency Care</option>
                    <option>Pediatric Dentistry</option>
                    <option>Orthodontics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9BB893] focus:border-transparent transition-colors duration-300"
                    placeholder="Tell us about your dental needs or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9BB893] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#8BA885] transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;