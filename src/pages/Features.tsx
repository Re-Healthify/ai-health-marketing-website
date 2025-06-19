import React, { useState } from 'react';
import { 
  Brain, 
  Mic, 
  Video, 
  BarChart3, 
  BookOpen, 
  DollarSign,
  Shield,
  Zap,
  Globe,
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Eye,
  Lock,
  FileText,
  Mail,
  Database,
  Smartphone,
  Monitor,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react';

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const coreFeatures = [
    {
      id: 'persona',
      icon: <Brain className="w-12 h-12" />,
      title: "AI Persona Builder",
      subtitle: "Train Your AI Twin to Think Like You",
      description: "Upload content, select tone, and review drafts. Your Twin learns your approach to health and wellness and adapts accordingly.",
      keyPoints: [
        "Import blogs, PDFs, transcripts",
        "Select tone (e.g., clinical, nurturing, bold)",
        "Build knowledge base by topic (e.g., sleep, digestion, hormones)",
        "Review and approve AI responses before deployment"
      ],
      gradient: "from-accent-purple to-accent-blue",
      mockupType: "training"
    },
    {
      id: 'voice-video',
      icon: <Video className="w-12 h-12" />,
      title: "Voice + Video Twin Creation",
      subtitle: "Sound and Look Like Yourself, 24/7",
      description: "Clone your voice and create a video avatar to make your Twin feel real across platforms.",
      keyPoints: [
        "High-fidelity voice cloning (ElevenLabs, etc.)",
        "Video avatars from high-res photos or recorded video",
        "Choose facial expressions and visual tone",
        "Multi-language support for global reach"
      ],
      gradient: "from-accent-blue to-accent-purple",
      mockupType: "avatar"
    },
    {
      id: 'social-tracking',
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Comment & Sentiment Tracking",
      subtitle: "Understand What Your Audience Is Saying",
      description: "Connect your social profiles to analyze comment sentiment, spot product questions, and create content your audience is asking for.",
      keyPoints: [
        "Auto-scan comments for themes",
        "Filter by sentiment, product mentions, confusion",
        "Integrate insights into content planning and Twin updates",
        "Real-time trend identification"
      ],
      gradient: "from-accent-yellow to-accent-red",
      mockupType: "dashboard"
    },
    {
      id: 'product-engine',
      icon: <DollarSign className="w-12 h-12" />,
      title: "Smart Product Recommendation Flows",
      subtitle: "Recommend With Intelligence, Integrity, and Impact",
      description: "Your Twin only recommends products you've approved—delivered with ingredient-level logic, context-aware suggestions, and regulatory disclaimers.",
      keyPoints: [
        "Support for affiliate and owned products",
        "Filters: allergens, pregnancy-safe, category logic",
        "Dynamic product ranking based on user preferences and behavior",
        "Automated compliance and disclaimer insertion"
      ],
      gradient: "from-accent-red to-accent-yellow",
      mockupType: "conversation"
    },
    {
      id: 'crm-integration',
      icon: <Database className="w-12 h-12" />,
      title: "CRM + Email Integrations",
      subtitle: "Turn Conversations Into Community Growth",
      description: "Capture emails, segment audiences, and automate campaigns using CRM tools you already use.",
      keyPoints: [
        "Email collection from Twin interactions",
        "Triggered sequences by topic or health concern",
        "Sync with newsletter and course funnels",
        "Integration with ConvertKit, ActiveCampaign, Mailchimp, HubSpot"
      ],
      gradient: "from-accent-purple to-accent-yellow",
      mockupType: "integrations"
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      subtitle: "See What's Working and Refine Your Strategy",
      description: "From Twin engagement to sales attribution, our dashboard gives you the data you need to grow smarter.",
      keyPoints: [
        "Product clicks and conversions",
        "Top-performing questions/topics",
        "Revenue per product",
        "Audience sentiment over time"
      ],
      gradient: "from-accent-blue to-accent-red",
      mockupType: "analytics"
    }
  ];

  const technicalFeatures = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Advanced Voice Cloning",
      description: "Neural voice synthesis that captures emotional nuance and speaking patterns",
      capabilities: ["Emotional tone matching", "Accent preservation", "Speaking pace adaptation", "Natural conversation flow"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Lifelike Avatar Creation",
      description: "Photorealistic video avatars with natural expressions and body language",
      capabilities: ["Facial expression mapping", "Gesture recognition", "Lip-sync accuracy", "Custom appearance options"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Healthcare AI Training",
      description: "Specialized machine learning models trained on health and wellness content",
      capabilities: ["Domain-specific knowledge", "Contextual understanding", "Personalized responses", "Continuous improvement"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Platform Deployment",
      description: "Seamless integration across websites, social media, and mobile applications",
      capabilities: ["API integrations", "Widget embedding", "Social media bots", "Mobile app SDKs"]
    }
  ];

  const crmTools = [
    { name: "ConvertKit", logo: "📧" },
    { name: "ActiveCampaign", logo: "🎯" },
    { name: "Mailchimp", logo: "🐵" },
    { name: "HubSpot", logo: "🔶" },
    { name: "Klaviyo", logo: "📊" },
    { name: "Zapier", logo: "⚡" }
  ];

  const renderMockup = (type, gradient) => {
    switch (type) {
      case 'training':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary-900">AI Training Interface</h4>
              <div className="text-xs bg-accent-purple/10 text-accent-purple px-2 py-1 rounded">Training</div>
            </div>
            <div className="space-y-3">
              <div className="bg-accent-blue/10 rounded-lg p-3">
                <div className="text-xs text-text-secondary mb-1">Content Upload</div>
                <div className="text-sm text-primary-900">✓ 47 articles processed</div>
              </div>
              <div className="bg-accent-purple/10 rounded-lg p-3">
                <div className="text-xs text-text-secondary mb-1">Tone Analysis</div>
                <div className="text-sm text-primary-900">Professional, Empathetic, Evidence-based</div>
              </div>
              <div className="bg-accent-yellow/10 rounded-lg p-3">
                <div className="text-xs text-text-secondary mb-1">Knowledge Areas</div>
                <div className="text-sm text-primary-900">Gut Health, Hormones, Sleep, Nutrition</div>
              </div>
            </div>
          </div>
        );
      
      case 'avatar':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary-900">Avatar Studio</h4>
              <div className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded">Live</div>
            </div>
            <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl aspect-video flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <Video className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Dr. Sarah's Avatar</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-accent-purple/10 p-2 rounded text-center">Voice: 98% Match</div>
              <div className="bg-accent-blue/10 p-2 rounded text-center">Expression: Natural</div>
            </div>
          </div>
        );
      
      case 'dashboard':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary-900">Social Analytics</h4>
              <div className="text-xs bg-accent-yellow/10 text-accent-yellow px-2 py-1 rounded">Real-time</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-900">Positive Sentiment</span>
                <span className="text-sm font-bold text-accent-purple">89%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-900">Questions Today</span>
                <span className="text-sm font-bold text-accent-blue">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-900">Trending Topics</span>
                <span className="text-sm font-bold text-accent-yellow">12</span>
              </div>
            </div>
          </div>
        );
      
      case 'conversation':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-primary-900 text-sm">AI Twin</div>
                <div className="text-xs text-text-secondary">Recommending</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-accent-red/10 to-accent-yellow/10 rounded-lg p-4">
              <div className="text-xs text-text-secondary mb-2">Smart Recommendation</div>
              <div className="text-sm text-primary-900 mb-3">"For better sleep, I recommend magnesium glycinate..."</div>
              <div className="bg-white rounded-lg p-3 border">
                <div className="text-xs font-semibold text-primary-900">Magnesium Glycinate 400mg</div>
                <div className="text-xs text-text-secondary">Highly bioavailable • Sleep support</div>
              </div>
            </div>
          </div>
        );
      
      case 'integrations':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary-900">Connected Tools</h4>
              <div className="text-xs bg-accent-purple/10 text-accent-purple px-2 py-1 rounded">6 Active</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {crmTools.slice(0, 4).map((tool, idx) => (
                <div key={idx} className="bg-primary-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">{tool.logo}</div>
                  <div className="text-xs font-medium text-primary-900">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary-900">Performance Dashboard</h4>
              <div className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded">Live Data</div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-accent-purple">$2.4K</div>
                  <div className="text-xs text-text-secondary">Revenue</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent-blue">89%</div>
                  <div className="text-xs text-text-secondary">Satisfaction</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent-yellow">1.2K</div>
                  <div className="text-xs text-text-secondary">Interactions</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-accent-blue/20 to-accent-red/20 h-16 rounded-lg flex items-end justify-between p-2">
                <div className="w-2 bg-accent-blue h-8 rounded"></div>
                <div className="w-2 bg-accent-purple h-12 rounded"></div>
                <div className="w-2 bg-accent-yellow h-6 rounded"></div>
                <div className="w-2 bg-accent-red h-10 rounded"></div>
                <div className="w-2 bg-accent-blue h-14 rounded"></div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Everything You Need to Build, Scale, and
            <span className="block text-accent-purple">Monetize Your Health Expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
            Re:Healthify combines powerful AI features with healthcare-grade controls to help you engage your audience, recommend products, and grow revenue—ethically and intelligently.
          </p>
          
          {/* Animated Lifecycle Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <Brain className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-primary-900">Build</span>
            </div>
            <ArrowRight className="w-4 h-4 text-text-secondary" />
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <DollarSign className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-primary-900">Recommend</span>
            </div>
            <ArrowRight className="w-4 h-4 text-text-secondary" />
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <BarChart3 className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-primary-900">Analyze</span>
            </div>
            <ArrowRight className="w-4 h-4 text-text-secondary" />
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
              <TrendingUp className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-primary-900">Grow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Core Platform Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore each feature in detail and see how they work together to create your intelligent AI health twin.
            </p>
          </div>

          <div className="space-y-24">
            {coreFeatures.map((feature, index) => (
              <div key={feature.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className={`text-xl font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-6`}>
                    {feature.subtitle}
                  </p>
                  
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {feature.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`bg-gradient-to-r ${feature.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mockup */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${feature.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-3xl p-8`}>
                    {renderMockup(feature.mockupType, feature.gradient)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for the most realistic and effective digital health experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-purple flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Integrations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Seamless CRM & Email Integrations
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Connect with the tools you already use to capture leads, nurture relationships, and grow your community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {crmTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-primary-100">
                <div className="text-3xl mb-3">{tool.logo}</div>
                <div className="font-semibold text-primary-900 text-sm">{tool.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300">
              Connect My CRM
            </button>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Healthcare-Grade Security & Compliance
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Built with healthcare compliance and data security as foundational requirements, not afterthoughts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "HIPAA Compliant", desc: "Full healthcare data protection" },
              { icon: <Lock className="w-8 h-8" />, title: "SOC 2 Type II", desc: "Enterprise security standards" },
              { icon: <FileText className="w-8 h-8" />, title: "GDPR Aligned", desc: "Global privacy compliance" },
              { icon: <Users className="w-8 h-8" />, title: "FDA Guidelines", desc: "Medical device regulations" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center border border-primary-100">
                <div className="text-accent-purple mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-purple to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Put Your Expertise to Work—at Scale?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Experience all features with our comprehensive 30-day free trial. No setup fees, no commitments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-accent-purple px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>Build Your Twin Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold text-lg underline">
              See Live Demo
            </button>
          </div>
          
          <div className="mt-8 text-primary-200 text-sm">
            <p>30-day free trial • No credit card required • Full feature access</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;