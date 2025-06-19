import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent-yellow" />
            <span className="text-white font-medium">Limited Time: 30-Day Free Trial</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <span className="block text-accent-yellow">Health Expertise?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed">
            Join thousands of health professionals who are scaling their impact and income with AI digital twins.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {[
              "Setup in under 10 minutes",
              "30-day money-back guarantee",
              "White-glove onboarding support",
              "No technical skills required"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button className="group bg-white text-primary-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-white hover:text-accent-blue transition-colors duration-300 font-semibold text-lg underline">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Elements */}
          <div className="text-primary-200 text-sm">
            <p>No credit card required • Cancel anytime • HIPAA compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;