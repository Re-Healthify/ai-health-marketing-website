import React from 'react';
import { ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';

const CTAFooter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-900 to-primary-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Message */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-yellow" />
              <span className="text-white font-medium">Limited Time: 30-Day Free Trial</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to scale your practice,
              <span className="block text-accent-yellow">reach, and revenue?</span>
            </h2>

            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Join thousands of health professionals who are transforming their expertise into intelligent AI experiences that work 24/7.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Setup in Minutes</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-accent-blue mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">No Risk Trial</div>
              </div>
            </div>
          </div>

          {/* Right Side - CTAs */}
          <div className="text-center lg:text-right">
            <div className="space-y-6">
              <button className="w-full lg:w-auto bg-white text-primary-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-3">
                <span>Create Your Twin</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <div className="text-center lg:text-right">
                <button className="text-white hover:text-accent-yellow transition-colors duration-300 font-semibold text-lg underline">
                  Book a Demo
                </button>
              </div>

              <div className="text-primary-200 text-sm">
                <p>No credit card required • Cancel anytime • 30-day guarantee</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-white text-sm mb-2">Join 1,200+ health experts including:</div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 text-xs text-primary-200">
                <span className="bg-white/20 px-2 py-1 rounded">Mayo Clinic Partners</span>
                <span className="bg-white/20 px-2 py-1 rounded">Johns Hopkins Network</span>
                <span className="bg-white/20 px-2 py-1 rounded">Cleveland Clinic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;