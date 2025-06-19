import React from 'react';
import { Users, Building2, Heart, ArrowRight } from 'lucide-react';

const Benefits = () => {
  const audiences = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health Experts & Influencers",
      subtitle: "Scale Your Impact",
      benefits: [
        "24/7 audience engagement without burnout",
        "Monetize expertise through verified product recommendations",
        "Build authentic digital brand with AI that sounds like you",
        "Expand reach across multiple platforms simultaneously",
        "Focus on high-value activities while AI handles routine interactions"
      ],
      gradient: "from-accent-purple to-accent-blue",
      bgGradient: "from-accent-purple/10 to-accent-blue/10"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Brands & Companies",
      subtitle: "Trusted Partnerships",
      benefits: [
        "Access credentialed health experts for product promotion",
        "Ensure compliant, evidence-based marketing",
        "Track ROI with detailed attribution and analytics",
        "Build trust through expert-verified recommendations",
        "Scale influencer partnerships with AI efficiency"
      ],
      gradient: "from-accent-blue to-accent-yellow",
      bgGradient: "from-accent-blue/10 to-accent-yellow/10"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Health Seekers",
      subtitle: "Personalized Guidance",
      benefits: [
        "Get expert advice anytime, anywhere",
        "Receive personalized health recommendations",
        "Access trusted, evidence-based information",
        "Learn from verified health professionals",
        "Make informed decisions with expert insights"
      ],
      gradient: "from-accent-yellow to-accent-red",
      bgGradient: "from-accent-yellow/10 to-accent-red/10"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Benefits for Everyone
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Re:Healthify creates value for health experts, brands, and consumers by building trust, scaling expertise, and ensuring compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${audience.bgGradient} border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${audience.gradient} text-white mb-6`}>
                {audience.icon}
              </div>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {audience.title}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent`}>
                  {audience.subtitle}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {audience.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${audience.gradient} mt-2`}></div>
                    <p className="text-text-secondary leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r ${audience.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group`}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Proven Results Across the Health Industry
            </h3>
            <p className="text-text-secondary text-lg">
              Join thousands of health professionals already scaling their impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">300%</div>
              <div className="text-text-secondary">Increase in Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">10x</div>
              <div className="text-text-secondary">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">95%</div>
              <div className="text-text-secondary">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">24/7</div>
              <div className="text-text-secondary">Expert Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;