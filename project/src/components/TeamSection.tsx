import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, Heart, Users, Shield, Smile } from 'lucide-react';

const TeamSection: React.FC = () => {
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
    <section id="team" ref={sectionRef} className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-[#9BB893]">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From dental hygienists and dental assistants to our lab technicians and office staff, 
            we show that the best customer experience comes from genuine care and concern. Our goal 
            is to ensure every appointment is comfortable, relieves any discomfort or gives you the 
            smile you've always wanted!
          </p>
        </div>

        {/* Featured Doctor - Dr. Katheryn Kerr */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll opacity-0 translate-x-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#9BB893]/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dr. Katheryn Kerr" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-8 delay-300">
            <div className="inline-flex items-center bg-[#9BB893]/10 text-[#9BB893] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Pediatric & Surgical Specialist
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Dr. Katheryn Kerr, DDS</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dr. Kat loves working with children but also excels in the world of surgery. She has a 
              kind heart and a sincere love for her patients. While furthering her skill in implants, 
              she hopes to change the way most people view dentistry by creating a comfortable atmosphere 
              that no one is scared of.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-gray-700">Specializes in Pediatric Dentistry</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-gray-700">Expert in Oral Surgery & Implants</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-gray-700">Creating Comfortable, Fear-Free Experiences</span>
              </div>
            </div>

            <div className="bg-[#EBF7E8] rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Areas of Excellence</h4>
              <div className="flex flex-wrap gap-2">
                {['Pediatric Dentistry', 'Oral Surgery', 'Dental Implants', 'Anxiety Management', 'Child-Friendly Care', 'Surgical Procedures'].map((spec, index) => (
                  <span key={index} className="bg-white text-[#9BB893] px-3 py-1 rounded-full text-sm font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Dr. Elizabeth Russell */}
          <div className="animate-on-scroll opacity-0 translate-y-8 bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-6 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. Elizabeth Russell"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">Dr. Elizabeth Russell</h4>
                <p className="text-[#9BB893] font-medium mb-2">DDS, BSc</p>
                <div className="inline-flex items-center bg-[#9BB893]/10 text-[#9BB893] px-3 py-1 rounded-full text-sm font-medium">
                  <Award className="w-3 h-3 mr-1" strokeWidth={1.5} />
                  Polished & Poised
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Polished and Poised are words often heard in the same sentence as Dr. Russell. 
              With a delicate touch she aims to ensure all her patients leave the office feeling 
              happy about dentistry and confident they received the best treatment. All smiles here.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Smile className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Delicate Touch & Precision Care</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Patient Confidence & Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Excellence in Treatment Quality</span>
              </div>
            </div>
          </div>

          {/* Ms. Tasha Crooks */}
          <div className="animate-on-scroll opacity-0 translate-y-8 delay-200 bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mr-6 flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Ms. Tasha Crooks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">Ms. Tasha Crooks</h4>
                <p className="text-[#9BB893] font-medium mb-2">Office Manager</p>
                <div className="inline-flex items-center bg-[#9BB893]/10 text-[#9BB893] px-3 py-1 rounded-full text-sm font-medium">
                  <Shield className="w-3 h-3 mr-1" strokeWidth={1.5} />
                  Best in the Game
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Managing a dental office is no easy task but Ms. Crooks does it with ease. 
              The best in the game, she always ensures every patient is comfortable and satisfied. 
              For all the tips and tricks, look no further.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Expert Office Management</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Patient Comfort & Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-[#9BB893] mr-3" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">Operational Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-[#EBF7E8] rounded-3xl p-8 lg:p-12 animate-on-scroll opacity-0 translate-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes Our Team Special</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive team approach ensures that every aspect of your dental experience 
              is handled with care, expertise, and genuine concern for your wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Genuine Care',
                description: 'From our dental hygienists to our office staff, every team member shows sincere concern for your comfort and wellbeing.',
                icon: Heart
              },
              {
                title: 'Comprehensive Expertise',
                description: 'Our diverse team includes specialists in pediatrics, surgery, and general care to meet all your dental needs.',
                icon: Award
              },
              {
                title: 'Comfortable Experience',
                description: 'We create an atmosphere where no one is scared, ensuring every appointment is as comfortable as possible.',
                icon: Shield
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm">
                  <value.icon className="w-8 h-8 text-[#9BB893]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white text-[#9BB893] px-6 py-3 rounded-full shadow-sm">
              <Smile className="w-5 h-5 mr-2" strokeWidth={1.5} />
              <span className="font-medium">Ready to experience the difference? Schedule your appointment today!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;