import React, { useEffect, useRef } from 'react';
import { Heart, Star, Clock, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#9BB893]">1 Dental</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional dental care in a comfortable, 
            modern environment with the latest technology and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Compassionate Care',
              description: 'We treat every patient with kindness and understanding, ensuring your comfort throughout your visit.'
            },
            {
              icon: Star,
              title: 'Expert Team',
              description: 'Our experienced dental professionals stay current with the latest techniques and technologies.'
            },
            {
              icon: Clock,
              title: 'Flexible Hours',
              description: 'Convenient scheduling options including evenings and weekends to fit your busy lifestyle.'
            },
            {
              icon: MapPin,
              title: 'Modern Facility',
              description: 'State-of-the-art equipment and a comfortable, welcoming environment for all ages.'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 text-center group hover:transform hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#EBF7E8] rounded-2xl mb-6 group-hover:bg-[#9BB893] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#9BB893] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#EBF7E8] rounded-3xl p-8 lg:p-12 animate-on-scroll opacity-0 translate-y-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At 1 Dental, we believe everyone deserves access to quality dental care. 
                Our mission is to provide comprehensive, personalized treatment that helps 
                you achieve and maintain optimal oral health for life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine advanced dental technology with a gentle, patient-centered 
                approach to create positive experiences that keep our patients smiling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#9BB893] mb-2">98%</div>
                <div className="text-sm text-gray-600">Patient Satisfaction</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#9BB893] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#9BB893] mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Serving</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#9BB893] mb-2">5000+</div>
                <div className="text-sm text-gray-600">Happy Smiles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;