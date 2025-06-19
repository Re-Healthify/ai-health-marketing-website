import React from 'react';
import { 
  Bot, 
  Mic, 
  Video, 
  BarChart3, 
  BookOpen, 
  DollarSign,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Digital Twin",
      description: "Multimodal AI avatars trained on your expertise, voice, and philosophy for authentic interactions.",
      gradient: "from-accent-purple to-accent-blue"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Product Verification Workflow",
      description: "Structured system for safe, compliant product promotion with brand verification and expert credentials.",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Social Media Analytics",
      description: "Advanced sentiment analysis and conversation insights from Instagram, TikTok, and other platforms.",
      gradient: "from-accent-yellow to-accent-red"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Health Knowledge Base",
      description: "Curated, transparent knowledge system structured around your specialties and expertise areas.",
      gradient: "from-accent-red to-accent-yellow"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affiliate Commission Engine",
      description: "Real-time attribution tracking with performance dashboards and automated commission management.",
      gradient: "from-accent-purple to-accent-yellow"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "24/7 Engagement",
      description: "Always-on AI interactions that scale your expertise across multiple channels simultaneously.",
      gradient: "from-accent-blue to-accent-red"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Health Professionals
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Everything you need to transform your health expertise into intelligent, engaging, and profitable AI experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 hover:border-primary-200 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Mic className="w-12 h-12 text-accent-purple mx-auto mb-4" />
            <h4 className="text-xl font-bold text-primary-900 mb-2">Voice Cloning</h4>
            <p className="text-text-secondary">Realistic speech with emotional nuance</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Video className="w-12 h-12 text-accent-purple mx-auto mb-4" />
            <h4 className="text-xl font-bold text-primary-900 mb-2">Lifelike Avatars</h4>
            <p className="text-text-secondary">Video content and conversational interfaces</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Globe className="w-12 h-12 text-accent-purple mx-auto mb-4" />
            <h4 className="text-xl font-bold text-primary-900 mb-2">Multi-Platform</h4>
            <p className="text-text-secondary">Seamless integration across all channels</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;