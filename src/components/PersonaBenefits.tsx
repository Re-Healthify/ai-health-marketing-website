import React, { useState } from 'react';
import { Stethoscope, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const PersonaBenefits = () => {
  const [activeTab, setActiveTab] = useState('expert');

  const personas = {
    expert: {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Expert",
      subtitle: "Healthcare Professionals",
      benefits: [
        "Automate repetitive Q&A with patients",
        "Offer your protocol 24/7 without burnout", 
        "Build passive income from trusted products"
      ],
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-accent-blue to-accent-purple"
    },
    influencer: {
      icon: <Users className="w-6 h-6" />,
      title: "Influencer",
      subtitle: "Content Creators & Advocates",
      benefits: [
        "Convert followers with personalized product flows",
        "Book more brand deals with verified promotion",
        "Grow trust by offering real value in your DMs"
      ],
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-accent-purple to-accent-yellow"
    },
    clinician: {
      icon: <Heart className="w-6 h-6" />,
      title: "Clinician",
      subtitle: "Medical Practitioners",
      benefits: [
        "Extend your care beyond the clinic",
        "Offer evidence-based content with disclaimers and tracking",
        "Stay compliant while scaling digitally"
      ],
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-accent-yellow to-accent-red"
    }
  };

  const currentPersona = personas[activeTab];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Built for Your Specialty
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover how Re:Healthify transforms your unique expertise into intelligent, always-on AI experiences.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-2xl p-2 inline-flex space-x-2">
            {Object.entries(personas).map(([key, persona]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${persona.gradient} text-white shadow-lg`
                    : 'text-text-secondary hover:text-primary-900 hover:bg-white'
                }`}
              >
                {persona.icon}
                <span>{persona.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-2">
                {currentPersona.title}
              </h3>
              <p className={`text-lg font-semibold bg-gradient-to-r ${currentPersona.gradient} bg-clip-text text-transparent mb-6`}>
                {currentPersona.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {currentPersona.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-xl hover:shadow-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-accent-purple flex-shrink-0 mt-1" />
                  <div className="text-primary-900 font-medium leading-relaxed">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className={`bg-gradient-to-r ${currentPersona.gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}>
                <span>Get Started as {currentPersona.title}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentPersona.gradient.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-3xl p-8`}>
              <img
                src={currentPersona.image}
                alt={currentPersona.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentPersona.gradient} text-white`}>
                    {currentPersona.icon}
                  </div>
                  <div>
                    <div className="font-bold text-primary-900">AI Twin Active</div>
                    <div className="text-text-secondary text-sm">Serving your audience</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-900">24/7</div>
                    <div className="text-text-light text-xs">Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">98%</div>
                    <div className="text-text-light text-xs">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">5x</div>
                    <div className="text-text-light text-xs">Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaBenefits;