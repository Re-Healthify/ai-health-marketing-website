import React, { useState } from 'react';
import { 
  Brain, 
  Mic, 
  Video, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Lock,
  FileText,
  Users,
  Eye,
  BarChart3,
  DollarSign,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HowItWorksPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const integrationFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Custom AI trained on your expertise",
      description: "Your Twin speaks in your tone, references your protocols, and reflects your values.",
      gradient: "from-accent-purple to-accent-blue"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Natural voice cloning for authentic connection",
      description: "With high-quality audio samples, your Twin can speak to your audience exactly like you.",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Lifelike avatars for real-time interaction",
      description: "Video and image-based avatars bring your digital presence to life in apps, video, and chat.",
      gradient: "from-accent-yellow to-accent-red"
    }
  ];

  const complianceItems = [
    {
      title: "GDPR and HIPAA-aligned privacy architecture",
      description: "Enterprise-grade data protection ensuring patient privacy and regulatory compliance across all interactions."
    },
    {
      title: "Custom disclaimers for every Twin",
      description: "Automatically generated and contextually appropriate disclaimers for medical advice, product recommendations, and educational content."
    },
    {
      title: "Human-in-the-loop for critical responses",
      description: "Sensitive health topics are flagged for human review before AI responses, ensuring safety and accuracy."
    },
    {
      title: "Audit logs and conversation reviews",
      description: "Complete transparency with detailed logs of all interactions, recommendations, and decision-making processes."
    },
    {
      title: "Verified Promoter workflows",
      description: "Structured approval process for product partnerships, ensuring only verified, compliant recommendations reach your audience."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            What is an AI Digital Twin?
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            An AI Digital Twin is a conversational assistant trained to reflect your health expertise, communication style, and values. It can engage your audience 24/7—answering questions, educating users, and recommending products you trust.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Eye className="w-5 h-5 text-accent-purple" />
            <span className="text-primary-900 font-medium">See how it works below</span>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Persona, Voice, and Visual Integration
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Experience the depth and personalization that makes your AI twin truly authentic and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 hover:-translate-y-2 group">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Analytics */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-primary-900">Social Analytics Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-900">Instagram Comments</span>
                      <span className="text-xs text-accent-blue">+23% positive</span>
                    </div>
                    <div className="text-xs text-text-secondary">"What supplements help with sleep?"</div>
                  </div>
                  
                  <div className="bg-accent-purple/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-900">TikTok Mentions</span>
                      <span className="text-xs text-accent-purple">Trending topic</span>
                    </div>
                    <div className="text-xs text-text-secondary">"Gut health protocol recommendations"</div>
                  </div>
                  
                  <div className="bg-accent-yellow/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-900">Content Suggestions</span>
                      <span className="text-xs text-accent-yellow">AI Generated</span>
                    </div>
                    <div className="text-xs text-text-secondary">"Create content about magnesium benefits"</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-purple">89%</div>
                    <div className="text-xs text-text-light">Positive Sentiment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-blue">156</div>
                    <div className="text-xs text-text-light">Questions Today</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-yellow">12</div>
                    <div className="text-xs text-text-light">Trending Topics</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Understand What Your Audience Cares About
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We integrate with Instagram and TikTok to analyze sentiment, track product mentions, and surface trends across your comment sections. Stay informed without reading every post.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-accent-purple mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-primary-900">Comment clustering and sentiment scoring</div>
                    <div className="text-text-secondary text-sm">Automatically categorize and analyze the emotional tone of audience interactions</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-primary-900">Highlight trending health questions</div>
                    <div className="text-text-secondary text-sm">Identify the most common questions and concerns from your community</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-6 h-6 text-accent-yellow mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-primary-900">Auto-suggest content ideas and Twin updates</div>
                    <div className="text-text-secondary text-sm">Get AI-powered recommendations for new content based on audience needs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendation Engine */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Turn Conversations into Conversions
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Re:Healthify powers intelligent product recommendations based on user goals, health concerns, and preferences. Whether it's your own line or affiliate products, your Twin does the recommending—safely.
              </p>
              
              <div className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-xl p-6 mb-8">
                <div className="text-sm text-text-secondary mb-2">Example Logic:</div>
                <div className="text-primary-900 font-medium">
                  "Looking for better sleep?" → "This magnesium glycinate is commonly used and well-tolerated."
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-purple" />
                  <span className="text-text-secondary">Contextual recommendations based on conversation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-purple" />
                  <span className="text-text-secondary">Verified product database with safety profiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-purple" />
                  <span className="text-text-secondary">Automatic affiliate tracking and commission attribution</span>
                </div>
              </div>
            </div>

            {/* Chat Interface Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-primary-100">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-primary-100">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-900">Dr. Sarah's AI Twin</div>
                    <div className="text-text-secondary text-sm">Online • Responding</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-right">
                    <div className="inline-block bg-accent-blue/10 rounded-lg px-4 py-2 max-w-xs">
                      <div className="text-sm text-primary-900">I've been having trouble sleeping lately. Any suggestions?</div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="inline-block bg-primary-100 rounded-lg px-4 py-2 max-w-xs">
                      <div className="text-sm text-primary-900 mb-2">Sleep issues can have many causes. Based on research, magnesium glycinate is well-tolerated and may help with relaxation.</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src="https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" alt="Product" className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <div className="font-semibold text-primary-900 text-sm">Magnesium Glycinate 400mg</div>
                        <div className="text-text-secondary text-xs">Highly bioavailable form</div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white py-2 rounded-lg text-sm font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Built for Safety in Health and Wellness
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Trust and compliance are foundational to everything we build. Your professional reputation is protected at every interaction.
            </p>
          </div>

          <div className="space-y-4">
            {complianceItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-accent-purple flex-shrink-0" />
                    <span className="font-semibold text-primary-900">{item.title}</span>
                  </div>
                  {openAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="px-8 pb-6">
                    <p className="text-text-secondary leading-relaxed pl-10">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Lock className="w-8 h-8 text-accent-purple mb-2" />
                <div className="text-sm font-semibold text-primary-900">HIPAA Compliant</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-accent-blue mb-2" />
                <div className="text-sm font-semibold text-primary-900">SOC 2 Type II</div>
              </div>
              <div className="flex flex-col items-center">
                <FileText className="w-8 h-8 text-accent-yellow mb-2" />
                <div className="text-sm font-semibold text-primary-900">GDPR Aligned</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-accent-red mb-2" />
                <div className="text-sm font-semibold text-primary-900">FDA Guidelines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-purple to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the Future of Health Communication
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Talk to an AI Twin now and see how your voice, tone, and knowledge can work for you—at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-accent-purple px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>See My Twin in Action</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold text-lg underline">
              Schedule Live Demo
            </button>
          </div>
          
          <div className="mt-8 text-primary-200 text-sm">
            <p>Interactive demo • No signup required • See real AI responses</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;