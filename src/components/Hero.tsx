import React from 'react';
import { ArrowRight, Play, Users, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-blue/10 rounded-full px-4 py-2 mb-8">
              <Users className="w-4 h-4 text-accent-blue" />
              <span className="text-primary-900 font-medium text-sm">Trusted by 1,200+ Health Experts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight mb-6">
              Scale Your Impact with Your Own
              <span className="block bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple bg-clip-text text-transparent">
                AI Health Twin
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl">
              Train an intelligent avatar to share your expertise, grow your brand, and guide your audience 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button className="group bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 shadow-lg">
                <span>Create Your Twin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group flex items-center space-x-3 text-primary-900 hover:text-accent-blue transition-colors duration-300 font-semibold">
                <div className="bg-primary-100 rounded-full p-3 group-hover:bg-accent-blue/10 transition-colors duration-300">
                  <Play className="w-6 h-6" />
                </div>
                <span>Book a Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-900 mb-1">24/7</div>
                <div className="text-text-light text-sm">Always Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-900 mb-1">300%</div>
                <div className="text-text-light text-sm">Engagement Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-900 mb-1">95%</div>
                <div className="text-text-light text-sm">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-yellow/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-900">AI Health Twin</div>
                    <div className="text-text-secondary text-sm">Active & Learning</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-accent-blue/10 rounded-lg p-4">
                    <div className="text-sm text-text-secondary mb-2">Patient Question:</div>
                    <div className="text-primary-900">"What supplements help with inflammation?"</div>
                  </div>
                  
                  <div className="bg-accent-purple/10 rounded-lg p-4">
                    <div className="text-sm text-text-secondary mb-2">AI Twin Response:</div>
                    <div className="text-primary-900">"Based on current research, omega-3 fatty acids and curcumin show strong anti-inflammatory properties..."</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-text-light">
                    <span>Response time: 0.3s</span>
                    <span>Accuracy: 98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;