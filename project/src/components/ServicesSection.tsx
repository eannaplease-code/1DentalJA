import React, { useEffect, useRef } from 'react';
import { Smile, Shield, Zap, Sparkles, Heart, Eye } from 'lucide-react';

const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      features: ['Regular Cleanings', 'Cavity Fillings', 'Oral Exams', 'Fluoride Treatments']
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dental procedures.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      icon: Shield,
      title: 'Restorative Care',
      description: 'Restore function and beauty to damaged or missing teeth.',
      features: ['Dental Crowns', 'Bridges', 'Implants', 'Dentures']
    },
    {
      icon: Zap,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent oral health needs.',
      features: ['Pain Relief', 'Trauma Care', 'Urgent Repairs', 'Same-Day Service']
    },
    {
      icon: Heart,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care designed specifically for children and teens.',
      features: ['Child-Friendly Care', 'Preventive Treatments', 'Education', 'Gentle Approach']
    },
    {
      icon: Eye,
      title: 'Orthodontics',
      description: 'Straighten teeth and correct bite issues with modern orthodontic solutions.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Bite Correction']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#9BB893]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we offer comprehensive 
            dental services to meet all your oral health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EBF7E8] rounded-2xl mb-6 group-hover:bg-[#9BB893] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#9BB893] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#9BB893] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-[#9BB893] font-medium hover:text-[#8BA885] transition-colors duration-300 flex items-center group">
                <a href="#contact" className="flex items-center">
                  Learn More
                </a>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-8">
          <a href="#contact" className="bg-[#9BB893] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8BA885] transition-all duration-300 inline-flex items-center">
            Schedule Your Appointment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;