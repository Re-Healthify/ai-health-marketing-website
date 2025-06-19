import React, { useState } from 'react';
import { 
  Building2, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Target,
  TrendingUp,
  Eye,
  Star,
  Award,
  Filter,
  MessageSquare,
  DollarSign,
  Clock,
  Globe,
  Zap,
  Lock,
  FileText,
  Search,
  Play
} from 'lucide-react';

const Brands = () => {
  const [activeMetric, setActiveMetric] = useState('engagement');

  const verificationSteps = [
    {
      step: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Review Creator Profiles",
      description: "Browse verified experts by specialty, credentials, audience demographics, and engagement metrics.",
      features: ["Licensed professionals", "Audience analytics", "Engagement rates", "Specialty focus"]
    },
    {
      step: "02",
      icon: <Shield className="w-8 h-8" />,
      title: "Approve Partnerships",
      description: "Select creators who align with your brand values and target audience for authentic product promotion.",
      features: ["Brand alignment scoring", "Audience overlap analysis", "Content style matching", "Performance history"]
    },
    {
      step: "03",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track Performance",
      description: "Monitor campaign results across all channels with real-time analytics and attribution tracking.",
      features: ["Multi-channel tracking", "ROI measurement", "Sentiment analysis", "Conversion attribution"]
    }
  ];

  const campaignFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Campaign Briefs",
      description: "Define your messaging, target audience, and campaign objectives with detailed creative guidelines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creator Opt-in System",
      description: "Experts choose campaigns that align with their expertise and audience, ensuring authentic promotion."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Driven Content Matching",
      description: "Our AI matches your products with the most relevant expert conversations and audience needs."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Performance Data",
      description: "Track engagement, conversions, and ROI across all participating AI Twins and platforms."
    }
  ];

  const complianceFeatures = [
    {
      title: "Target Conditions & Use Cases",
      description: "Define specific health conditions and use cases where your product should be recommended."
    },
    {
      title: "Audience Restrictions",
      description: "Set age, pregnancy, medical condition, and other demographic restrictions for safe promotion."
    },
    {
      title: "Required Disclaimers",
      description: "Automatically include FDA-compliant disclaimers and safety information with every recommendation."
    },
    {
      title: "Creator Qualification Filters",
      description: "Specify required credentials (licensed professionals only, specific certifications, etc.)."
    }
  ];

  const analyticsMetrics = {
    engagement: {
      title: "Engagement Analytics",
      metrics: [
        { label: "Average CTR", value: "11.3%", trend: "+23%" },
        { label: "Conversation Rate", value: "8.7%", trend: "+15%" },
        { label: "Share Rate", value: "4.2%", trend: "+31%" }
      ]
    },
    sentiment: {
      title: "Sentiment Analysis",
      metrics: [
        { label: "Positive Mentions", value: "89%", trend: "+12%" },
        { label: "Neutral Mentions", value: "9%", trend: "-5%" },
        { label: "Negative Mentions", value: "2%", trend: "-18%" }
      ]
    },
    conversion: {
      title: "Conversion Tracking",
      metrics: [
        { label: "Conversion Rate", value: "6.8%", trend: "+28%" },
        { label: "Average Order Value", value: "$127", trend: "+19%" },
        { label: "Customer LTV", value: "$340", trend: "+22%" }
      ]
    }
  };

  const successStories = [
    {
      brand: "NutriVital",
      category: "Supplements",
      result: "340% increase in qualified leads",
      description: "Partnered with 50+ functional medicine practitioners to promote their omega-3 line",
      metrics: { reach: "2.3M", engagement: "12.4%", conversion: "8.9%" }
    },
    {
      brand: "PureForm",
      category: "Protein Powders",
      result: "250% ROI in first quarter",
      description: "Collaborated with fitness coaches and nutritionists for authentic product recommendations",
      metrics: { reach: "1.8M", engagement: "15.2%", conversion: "11.3%" }
    },
    {
      brand: "ZenBalance",
      category: "Wellness Products",
      result: "180% increase in brand awareness",
      description: "Worked with mental health professionals to promote stress-relief products",
      metrics: { reach: "1.5M", engagement: "9.8%", conversion: "7.2%" }
    }
  ];

  const brandBenefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Expert Network",
      description: "Access 1,200+ licensed professionals and credentialed health experts",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Contextual Recommendations",
      description: "Products recommended only when relevant to user conversations and needs",
      gradient: "from-accent-purple to-accent-yellow"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Full Attribution Tracking",
      description: "Track every interaction from recommendation to purchase with detailed analytics",
      gradient: "from-accent-yellow to-accent-red"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance Guaranteed",
      description: "FDA-compliant disclaimers and safety protocols built into every recommendation",
      gradient: "from-accent-red to-accent-blue"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Reach Health-Conscious Customers Through
            <span className="block text-accent-purple">Trusted Digital Twins</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
            Re:Healthify connects your brand with verified experts and creators who recommend products in contextually relevant, AI-guided conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button className="group bg-gradient-to-r from-accent-purple to-accent-blue text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-xl transition-all duration-300 flex items-center space-x-3">
              <span>List Your Product</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-primary-900 hover:text-accent-purple transition-colors duration-300 font-semibold text-lg underline">
              Book a Brand Demo
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-text-secondary text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Verified experts only</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Real-time analytics</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Compliance guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Why Leading Brands Choose Re:Healthify
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Connect with health-conscious consumers through trusted experts who genuinely believe in your products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Influencer Program */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Work With Pre-Vetted Experts and Licensed Professionals
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              All influencers and professionals are reviewed and approved before promoting your products, ensuring alignment with your brand's values and safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-accent-purple to-accent-blue text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-accent-purple">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Control How Your Products Are Promoted
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Use our product onboarding system to define claims, ingredient disclosures, and usage constraints. Our platform ensures your product is only recommended when appropriate.
              </p>

              <div className="space-y-6">
                {complianceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-xl shadow-lg">
                    <CheckCircle className="w-6 h-6 text-accent-purple mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-900 mb-2">{feature.title}</h4>
                      <p className="text-text-secondary text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Listing Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-primary-900">Product Listing Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                    <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-900 mb-2">Product: Omega-3 Complex</div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white rounded p-2">
                        <div className="text-text-light">Target Conditions</div>
                        <div className="text-primary-900 font-medium">Heart Health, Brain Function</div>
                      </div>
                      <div className="bg-white rounded p-2">
                        <div className="text-text-light">Restrictions</div>
                        <div className="text-primary-900 font-medium">Blood thinners, Under 18</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent-purple/10 to-accent-yellow/10 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-900 mb-2">Approved Creators</div>
                    <div className="flex space-x-2">
                      <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-primary-900">Licensed MDs</div>
                      <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-primary-900">Nutritionists</div>
                      <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-primary-900">+3 more</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent-yellow/10 to-accent-red/10 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-900 mb-2">Compliance Status</div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent-purple" />
                      <span className="text-xs text-primary-900">FDA disclaimers added</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Management */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Launch Scalable, Compliant AI-Driven Campaigns
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Create product campaigns that deploy across top-performing Twins. Define your goals, content guidelines, and targeting criteria—then watch the results roll in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {campaignFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
                <div className="text-accent-purple mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Campaign Performance Stats */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">
                Average Campaign Performance
              </h3>
              <p className="text-text-secondary">Based on 500+ successful brand partnerships</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-purple mb-2">11.3%</div>
                <div className="text-text-secondary">Average CTR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-blue mb-2">6.8%</div>
                <div className="text-text-secondary">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-yellow mb-2">340%</div>
                <div className="text-text-secondary">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-red mb-2">89%</div>
                <div className="text-text-secondary">Positive Sentiment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Understand Consumer Sentiment in Real Time
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Gain visibility into what your customers are saying, asking, and feeling about your products—directly from Twin-led interactions and social conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Analytics Dashboard */}
            <div className="bg-primary-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold">Brand Analytics Dashboard</h4>
                <div className="flex space-x-2">
                  {Object.keys(analyticsMetrics).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveMetric(key)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${
                        activeMetric === key
                          ? 'bg-accent-purple text-white'
                          : 'bg-primary-700 text-primary-200 hover:bg-primary-600'
                      }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-accent-yellow font-semibold mb-4">
                  {analyticsMetrics[activeMetric].title}
                </h5>
                <div className="space-y-4">
                  {analyticsMetrics[activeMetric].metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-primary-100">{metric.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold">{metric.value}</span>
                        <span className="text-accent-blue text-sm">{metric.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-700 rounded-lg p-4">
                <div className="text-sm text-primary-200 mb-2">Top Performing Product</div>
                <div className="text-white font-semibold">Omega-3 Complex - 15.2% CTR</div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-8 h-8 text-accent-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Product Mentions & Volume</h4>
                  <p className="text-primary-200">Track how often your products are mentioned in AI Twin conversations and social media.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BarChart3 className="w-8 h-8 text-accent-purple mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Sentiment Breakdown</h4>
                  <p className="text-primary-200">Understand positive, neutral, and negative sentiment around your brand and products.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Eye className="w-8 h-8 text-accent-yellow mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Most Asked Questions</h4>
                  <p className="text-primary-200">Identify common customer questions and objections to improve your messaging.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-accent-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Conversion Heatmaps</h4>
                  <p className="text-primary-200">See which channels and creators drive the highest conversion rates for your products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Brand Success Stories
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how leading health and wellness brands are driving growth through authentic expert partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary-900">{story.brand}</h3>
                  <div className="text-sm text-accent-purple font-medium">{story.category}</div>
                </div>
                
                <div className="text-2xl font-bold text-accent-purple mb-3">
                  {story.result}
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {story.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary-900">{story.metrics.reach}</div>
                    <div className="text-xs text-text-light">Reach</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary-900">{story.metrics.engagement}</div>
                    <div className="text-xs text-text-light">Engagement</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary-900">{story.metrics.conversion}</div>
                    <div className="text-xs text-text-light">Conversion</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-accent-purple to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Put Your Product in the Hands of Trusted Experts?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            List your product or sponsor an AI Twin campaign today and start reaching health-conscious customers through verified professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-white text-accent-purple px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>List Your Product</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold text-lg underline">
              Sponsor a Twin
            </button>
          </div>
          
          <div className="mt-8 text-primary-200 text-sm">
            <p>No setup fees • Performance-based pricing • Full analytics included</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;