import React, { useState } from 'react';
import { Check, X, Star, ArrowRight, Zap, Crown, Rocket, Building2, Calculator, Users, TrendingUp, Shield, Clock, DollarSign, BarChart3, Mic, Video, Globe, MessageSquare, Mail, Database, Settings, Eye, Lock, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);
  const [roiInputs, setRoiInputs] = useState({
    audience: 10000,
    commission: 15,
    interactions: 500,
    conversion: 3
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateROI = () => {
    const monthlyRevenue = (roiInputs.interactions * (roiInputs.conversion / 100) * roiInputs.commission);
    const planCost = 149; // Using Pro plan as example
    const roi = ((monthlyRevenue - planCost) / planCost * 100).toFixed(0);
    const timeSaved = Math.round(roiInputs.interactions * 0.05); // 3 minutes per interaction saved
    
    return {
      revenue: monthlyRevenue.toFixed(0),
      roi: roi,
      timeSaved: timeSaved,
      multiplier: (monthlyRevenue / planCost).toFixed(1)
    };
  };

  const plans = [
    {
      name: "Free",
      icon: <Zap className="w-8 h-8" />,
      price: 0,
      period: "month",
      description: "Perfect for health professionals just getting started with AI",
      highlights: ["Basic Twin (text only)", "1 product", "Limited analytics"],
      features: [
        "1 AI Digital Twin (text-based)",
        "Basic persona training",
        "1 product recommendation",
        "500 interactions/month",
        "Basic analytics dashboard",
        "Email support",
        "HIPAA compliance",
        "Mobile app access"
      ],
      limitations: [
        "Voice cloning",
        "Video avatars",
        "Social media integration",
        "CRM integrations",
        "Advanced analytics",
        "Priority support",
        "Brand campaign eligibility"
      ],
      gradient: "from-accent-blue to-accent-purple",
      popular: false,
      cta: "Start Free"
    },
    {
      name: "Pro",
      icon: <Crown className="w-8 h-8" />,
      price: billingPeriod === 'monthly' ? 149 : 1194, // 20% discount annually
      period: billingPeriod === 'monthly' ? "month" : "year",
      description: "Ideal for established practitioners ready to scale their practice",
      highlights: ["Voice integration", "Affiliate engine", "5 products", "CRM sync"],
      features: [
        "3 AI Digital Twins",
        "Advanced voice cloning",
        "Basic video avatars",
        "5 product recommendations",
        "5,000 interactions/month",
        "Social media integration (3 platforms)",
        "Advanced analytics & insights",
        "Priority email & chat support",
        "HIPAA compliance",
        "Mobile app access",
        "Affiliate commission tracking",
        "Basic CRM integrations",
        "Custom branding"
      ],
      limitations: [
        "Premium video avatars",
        "Brand campaign applications",
        "Advanced sentiment analytics",
        "API access",
        "White-label solutions"
      ],
      gradient: "from-accent-purple to-accent-yellow",
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Expert",
      icon: <Rocket className="w-8 h-8" />,
      price: billingPeriod === 'monthly' ? 399 : 3192, // 20% discount annually
      period: billingPeriod === 'monthly' ? "month" : "year",
      description: "For top-tier experts ready to maximize their digital presence",
      highlights: ["Video avatar", "Brand deal applications", "Sentiment analytics"],
      features: [
        "10 AI Digital Twins",
        "Premium voice & video cloning",
        "Professional video avatars",
        "Unlimited product recommendations",
        "25,000 interactions/month",
        "All social platforms integration",
        "Advanced sentiment analytics",
        "24/7 priority support",
        "HIPAA compliance",
        "Mobile app access",
        "Advanced affiliate tracking",
        "All CRM integrations",
        "Full custom branding",
        "Brand campaign eligibility",
        "API access",
        "Performance coaching"
      ],
      limitations: [
        "Multi-twin team management",
        "White-label solutions",
        "Dedicated account manager",
        "Custom compliance audits"
      ],
      gradient: "from-accent-yellow to-accent-red",
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-8 h-8" />,
      price: "Custom",
      period: "",
      description: "For healthcare organizations and large practices with custom needs",
      highlights: ["Multi-twin teams", "API access", "White-label", "Compliance audits"],
      features: [
        "Unlimited AI Digital Twins",
        "Enterprise voice & video cloning",
        "Custom video avatar production",
        "Unlimited product recommendations",
        "Unlimited interactions",
        "All platform integrations",
        "Advanced analytics suite",
        "24/7 dedicated support",
        "HIPAA compliance",
        "Mobile app access",
        "Enterprise affiliate tracking",
        "Custom CRM integrations",
        "Full white-label solution",
        "Multi-twin team management",
        "Dedicated account manager",
        "Custom training & onboarding",
        "SLA guarantees",
        "Custom compliance audits",
        "Priority feature requests"
      ],
      limitations: [],
      gradient: "from-accent-red to-accent-purple",
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const featureMatrix = [
    { category: "AI Twins & Training", features: [
      { name: "Number of AI Twins", free: "1", pro: "3", expert: "10", enterprise: "Unlimited" },
      { name: "Voice Cloning", free: "❌", pro: "✓ Basic", expert: "✓ Premium", enterprise: "✓ Enterprise" },
      { name: "Video Avatars", free: "❌", pro: "✓ Basic", expert: "✓ Professional", enterprise: "✓ Custom" },
      { name: "Persona Training", free: "Basic", pro: "Advanced", expert: "Premium", enterprise: "Custom" }
    ]},
    { category: "Product Recommendations", features: [
      { name: "Supported Products", free: "1", pro: "5", expert: "Unlimited", enterprise: "Unlimited" },
      { name: "Affiliate Tracking", free: "❌", pro: "✓", expert: "✓ Advanced", enterprise: "✓ Enterprise" },
      { name: "Brand Campaigns", free: "❌", pro: "❌", expert: "✓", enterprise: "✓" }
    ]},
    { category: "Integrations & Analytics", features: [
      { name: "Monthly Interactions", free: "500", pro: "5,000", expert: "25,000", enterprise: "Unlimited" },
      { name: "Social Platforms", free: "❌", pro: "3", expert: "All", enterprise: "All + Custom" },
      { name: "CRM Integrations", free: "❌", pro: "Basic", expert: "All", enterprise: "Custom" },
      { name: "Analytics Dashboard", free: "Basic", pro: "Advanced", expert: "Premium", enterprise: "Custom" },
      { name: "Sentiment Analysis", free: "❌", pro: "❌", expert: "✓", enterprise: "✓ Advanced" }
    ]},
    { category: "Support & Compliance", features: [
      { name: "Support Level", free: "Email", pro: "Priority", expert: "24/7", enterprise: "Dedicated" },
      { name: "HIPAA Compliance", free: "✓", pro: "✓", expert: "✓", enterprise: "✓ + Audits" },
      { name: "API Access", free: "❌", pro: "❌", expert: "✓", enterprise: "✓ Full" },
      { name: "White-label", free: "❌", pro: "❌", expert: "❌", enterprise: "✓" }
    ]}
  ];

  const addOns = [
    {
      name: "Additional AI Twin",
      price: "$49/month",
      description: "Add extra AI twins for different specialties or brands",
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Premium Voice Training",
      price: "$299 one-time",
      description: "Enhanced voice cloning with emotional nuance and accent preservation",
      icon: <Mic className="w-6 h-6" />
    },
    {
      name: "Professional Video Avatar",
      price: "$599 one-time",
      description: "Custom video avatar creation with professional studio quality",
      icon: <Video className="w-6 h-6" />
    },
    {
      name: "Custom Integration",
      price: "Starting at $500",
      description: "Connect to your existing systems and workflows",
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "White-Label Branding",
      price: "$199/month",
      description: "Remove Re:Healthify branding and use your own",
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "Compliance Audit",
      price: "$99/product/month",
      description: "Professional review of product recommendations and claims",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "Your 30-day free trial includes full access to all features in your chosen plan, including AI twin creation, voice cloning, and platform integrations. No credit card required to start, and you can cancel anytime during the trial period."
    },
    {
      question: "How does the interaction limit work?",
      answer: "An interaction is counted each time someone engages with your AI twin through any platform - messages, comments, direct conversations, or product recommendations. We provide detailed analytics to track your usage, and you'll receive notifications as you approach your limit."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately with prorated billing, while downgrades take effect at your next billing cycle. We'll help you migrate your data seamlessly and ensure no loss of functionality during transitions."
    },
    {
      question: "Is my data secure and HIPAA compliant?",
      answer: "Absolutely. All plans include HIPAA compliance, enterprise-grade encryption, and secure data handling. We undergo regular security audits, maintain SOC 2 Type II certification, and follow strict healthcare data protection protocols."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom enterprise pricing for healthcare systems, large practices, and organizations with specific requirements. Our enterprise plans include dedicated support, custom integrations, and volume discounts. Contact our sales team for a personalized quote."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: Free gets email support, Pro includes priority chat and email, Expert adds 24/7 phone support, and Enterprise includes a dedicated account manager with guaranteed response times and custom training sessions."
    },
    {
      question: "How does billing work for annual plans?",
      answer: "Annual plans are billed upfront and include a 20% discount compared to monthly billing. You can switch to annual billing at any time, and we'll credit your account for any unused monthly charges."
    },
    {
      question: "What happens if I exceed my interaction limit?",
      answer: "We'll notify you when you reach 80% and 95% of your limit. If you exceed it, your AI twin will continue working, but additional interactions will be charged at $0.10 per interaction. You can upgrade your plan at any time to increase your limit."
    }
  ];

  const roiResults = calculateROI();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Flexible Plans for Experts
            <span className="block text-accent-purple">at Every Stage</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
            Whether you're just starting out or scaling a global health brand, Re:Healthify gives you the tools to grow your impact and revenue—at your pace.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-text-secondary mb-8">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg">
              Start Free
            </button>
            <button className="text-primary-900 hover:text-accent-purple transition-colors duration-300 font-semibold underline">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-background rounded-xl p-2 shadow-lg">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    billingPeriod === 'monthly'
                      ? 'bg-accent-purple text-white shadow-lg'
                      : 'text-primary-900 hover:bg-primary-50'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 relative ${
                    billingPeriod === 'annual'
                      ? 'bg-accent-purple text-white shadow-lg'
                      : 'text-primary-900 hover:bg-primary-50'
                  }`}
                >
                  Annual
                  <span className="absolute -top-2 -right-2 bg-accent-yellow text-primary-900 text-xs font-bold px-2 py-1 rounded-full">
                    20% OFF
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-100 ${
                  plan.popular ? 'ring-4 ring-accent-purple ring-opacity-50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent-purple to-accent-yellow text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.gradient} text-white mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                    <p className="text-text-secondary mb-6 text-sm">{plan.description}</p>
                    
                    <div className="mb-6">
                      {typeof plan.price === 'number' ? (
                        <div>
                          <span className="text-4xl font-bold text-primary-900">${plan.price}</span>
                          <span className="text-text-secondary">/{plan.period}</span>
                          {billingPeriod === 'annual' && plan.price > 0 && (
                            <div className="text-sm text-accent-purple font-medium">
                              Save ${Math.round(plan.price * 12 * 0.2)} annually
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-3xl font-bold text-primary-900">{plan.price}</div>
                      )}
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      {plan.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-sm text-accent-purple font-medium mb-1">
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-primary-900 mb-4">What's included:</h4>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-accent-purple mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-bold text-primary-900 mt-6 mb-4">Not included:</h4>
                        {plan.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <X className="w-4 h-4 text-text-light mt-1 flex-shrink-0" />
                            <span className="text-text-light text-sm">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Compare all features across plans to find the perfect fit for your needs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {featureMatrix.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-b border-primary-100 last:border-b-0">
                <div className="bg-gradient-to-r from-primary-50 to-white px-6 py-4">
                  <h3 className="text-lg font-bold text-primary-900">{category.category}</h3>
                </div>
                
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-primary-50 last:border-b-0 hover:bg-primary-25 transition-colors duration-200">
                    <div className="font-medium text-primary-900">{feature.name}</div>
                    <div className="text-center text-text-secondary">{feature.free}</div>
                    <div className="text-center text-text-secondary">{feature.pro}</div>
                    <div className="text-center text-text-secondary">{feature.expert}</div>
                    <div className="text-center text-text-secondary">{feature.enterprise}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              See how Re:Healthify pays for itself through increased engagement and revenue
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Your Practice Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Monthly Audience Size
                  </label>
                  <input
                    type="number"
                    value={roiInputs.audience}
                    onChange={(e) => setRoiInputs({...roiInputs, audience: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple"
                    placeholder="10,000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Average Product Commission ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.commission}
                    onChange={(e) => setRoiInputs({...roiInputs, commission: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple"
                    placeholder="15"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Expected Monthly Interactions
                  </label>
                  <input
                    type="number"
                    value={roiInputs.interactions}
                    onChange={(e) => setRoiInputs({...roiInputs, interactions: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple"
                    placeholder="500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary-900 mb-2">
                    Conversion Rate (%)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.conversion}
                    onChange={(e) => setRoiInputs({...roiInputs, conversion: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple"
                    placeholder="3"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Use Default Estimates
                </button>
              </div>
            </div>

            {/* ROI Results */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Your Projected Results</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent-purple mb-2">${roiResults.revenue}</div>
                  <div className="text-primary-900 font-semibold">Estimated Monthly Revenue</div>
                  <div className="text-text-secondary text-sm">From affiliate commissions</div>
                </div>
                
                <div className="bg-gradient-to-r from-accent-blue/10 to-accent-yellow/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent-blue mb-2">{roiResults.roi}%</div>
                  <div className="text-primary-900 font-semibold">Return on Investment</div>
                  <div className="text-text-secondary text-sm">Based on Pro plan pricing</div>
                </div>
                
                <div className="bg-gradient-to-r from-accent-yellow/10 to-accent-red/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">{roiResults.timeSaved}h</div>
                  <div className="text-primary-900 font-semibold">Time Saved Monthly</div>
                  <div className="text-text-secondary text-sm">From automated interactions</div>
                </div>
                
                <div className="bg-gradient-to-r from-accent-red/10 to-accent-purple/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent-red mb-2">{roiResults.multiplier}x</div>
                  <div className="text-primary-900 font-semibold">ROI Multiplier</div>
                  <div className="text-text-secondary text-sm">Revenue vs. plan cost</div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <div className="text-sm text-text-secondary">
                  <strong>Note:</strong> Results based on industry averages. Individual results may vary based on audience engagement, product selection, and market conditions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Enhance your plan with additional features and services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
                <div className="text-accent-purple mb-4">
                  {addon.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-accent-purple mb-3">{addon.price}</div>
                <p className="text-text-secondary text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-primary-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-accent-purple to-accent-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Free, or Scale with Pro Features
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Launch your AI Health Twin in minutes—or speak to our team for enterprise options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-accent-purple px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl">
              Start Free
            </button>
            <button className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold underline">
              Book a Consultation
            </button>
          </div>
          <div className="mt-6 text-primary-200 text-sm">
            No credit card required • Cancel anytime • HIPAA compliant
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;