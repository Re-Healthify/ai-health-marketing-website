import React from 'react';
import { ArrowRight, UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Your Profile",
      description: "Upload your content, protocols, and expertise. Our AI learns your unique voice, style, and knowledge base.",
      color: "purple"
    },
    {
      step: "02",
      icon: <Settings className="w-8 h-8" />,
      title: "Train Your Twin",
      description: "Customize your AI avatar's appearance, voice, and responses. Set boundaries and compliance guidelines.",
      color: "blue"
    },
    {
      step: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Engage",
      description: "Deploy your AI twin across social platforms. Start engaging with audiences 24/7 while you focus on core work.",
      color: "yellow"
    },
    {
      step: "04",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale & Monetize",
      description: "Track performance, optimize engagement, and earn through verified product recommendations and affiliate partnerships.",
      color: "red"
    }
  ];

  const colorMap = {
    purple: "from-accent-purple to-accent-blue",
    blue: "from-accent-blue to-accent-purple",
    yellow: "from-accent-yellow to-accent-red",
    red: "from-accent-red to-accent-yellow"
  };

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get started in minutes and transform your expertise into an always-on AI presence that grows your impact and income.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple via-accent-blue via-accent-yellow to-accent-red transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-200 text-center lg:text-left">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${colorMap[step.color]} text-white font-bold text-xl mb-6 mx-auto lg:mx-0`}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colorMap[step.color]} text-white mb-6 mx-auto lg:mx-0`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ArrowRight className="w-4 h-4 text-text-light" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Building Your AI Twin
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;