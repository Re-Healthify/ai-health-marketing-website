import React, { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Shield,
  TrendingUp,
  MessageSquare,
  Star,
  Zap
} from 'lucide-react';

const ExpertsInfluencers = () => {
  const [activeTab, setActiveTab] = useState('functional');

  const personas = {
    functional: {
      icon: <Heart className="w-6 h-6" />,
      title: "Functional Medicine & Wellness Experts",
      subtitle: "Built for Protocol-Based Practices",
      description: "Transform your personalized approach to health into an AI-powered system that delivers your methodology consistently, safely, and at scale.",
      benefits: [
        "Save time answering repeat questions about supplements and protocols",
        "Deliver your approach consistently through an AI trained on your methodology",
        "Recommend products with ingredient-level logic and safety filters",
        "Ensure all advice is framed with disclaimers and traceability"
      ],
      gradient: "from-accent-purple to-accent-blue",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    clinical: {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Practitioners & Nutritionists",
      subtitle: "Extend Your Professional Reach",
      description: "Provide evidence-based guidance beyond the consultation room while maintaining professional standards and compliance requirements.",
      benefits: [
        "Extend your professional advice beyond the session",
        "Offer guided experiences for digestion, hormones, or fatigue",
        "Drive compliance and engagement with your product recommendations",
        "Maintain HIPAA/GDPR alignment and audit readiness"
      ],
      gradient: "from-accent-blue to-accent-purple",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    creators: {
      icon: <Users className="w-6 h-6" />,
      title: "Health Coaches & Creators",
      subtitle: "Monetize Your Influence Authentically",
      description: "Turn your content engagement into meaningful revenue streams while providing genuine value to your community through personalized AI interactions.",
      benefits: [
        "Convert content engagement into revenue through contextual AI conversations",
        "Offer followers personalized guidance without working 1:1",
        "Recommend trusted products with affiliate tracking",
        "Build trust through transparency, voice, and persona authenticity"
      ],
      gradient: "from-accent-yellow to-accent-red",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  };

  const sharedUseCases = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save time answering repetitive questions",
      description: "Your AI twin handles common inquiries instantly, freeing you to focus on complex cases and high-value activities."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale your protocols and philosophies",
      description: "Deliver your unique approach consistently to unlimited people without diluting your methodology or personal touch."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Monetize product recommendations",
      description: "Generate revenue through intelligent, contextual product suggestions that align with your expertise and values."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Build trust with compliance-first automation",
      description: "Maintain professional standards with built-in disclaimers, audit trails, and regulatory compliance features."
    }
  ];

  const currentPersona = personas[activeTab];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Made for Health Professionals,
            <span className="block bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Built to Scale Your Impact
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12">
            Whether you're guiding patients, coaching clients, or educating your audience—Re:Healthify turns your expertise into an AI-powered presence.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-text-light">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>1,200+ experts trust us</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Setup in 45 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>HIPAA compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Persona Selector */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Choose Your Professional Identity
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover how Re:Healthify is specifically designed for your type of health practice and expertise.
            </p>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center mb-12">
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
                  <span className="hidden lg:inline">{persona.title.split(' &')[0]}</span>
                  <span className="lg:hidden">{persona.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-12">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-primary-300 rounded-xl font-semibold text-primary-900 focus:ring-2 focus:ring-accent-purple focus:border-accent-purple"
            >
              {Object.entries(personas).map(([key, persona]) => (
                <option key={key} value={key}>
                  {persona.title}
                </option>
              ))}
            </select>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${currentPersona.gradient} text-white mb-4`}>
                  {currentPersona.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">
                  {currentPersona.title}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${currentPersona.gradient} bg-clip-text text-transparent mb-4`}>
                  {currentPersona.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {currentPersona.description}
                </p>
              </div>

              <div className="space-y-4">
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
                  <span>Get Started</span>
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
                
                {/* Overlay Stats */}
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
                      <div className="text-2xl font-bold text-primary-900">300%</div>
                      <div className="text-text-light text-xs">More Reach</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-900">95%</div>
                      <div className="text-text-light text-xs">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Use Cases */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              What You Can Do With Your AI Health Twin
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Platform-wide benefits that apply to all health professionals, regardless of specialty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sharedUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-accent-purple mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Real Results from Real Professionals
            </h2>
            <p className="text-xl text-text-secondary">
              See how experts like you are transforming their practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">400%</div>
              <div className="text-primary-900 font-semibold mb-2">Revenue Increase</div>
              <div className="text-text-secondary text-sm">Average across functional medicine practitioners</div>
            </div>
            <div className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent-blue mb-2">80%</div>
              <div className="text-primary-900 font-semibold mb-2">Time Saved</div>
              <div className="text-text-secondary text-sm">On routine patient questions and follow-ups</div>
            </div>
            <div className="bg-gradient-to-br from-accent-yellow/10 to-accent-red/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-2">10x</div>
              <div className="text-primary-900 font-semibold mb-2">Audience Reach</div>
              <div className="text-text-secondary text-sm">Without increasing workload or burnout</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-purple to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Persona and Build Your AI Twin Today
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Start free and scale your influence, income, and impact—without scaling your time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-accent-purple px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>Choose Your Persona → Build Your Twin</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="mt-8 text-primary-200 text-sm">
            <p>30-day free trial • No credit card required • Setup in under 45 minutes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertsInfluencers;