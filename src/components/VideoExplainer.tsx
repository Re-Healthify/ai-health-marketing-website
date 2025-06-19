import React from 'react';
import { Play, CheckCircle, Users, DollarSign, Clock } from 'lucide-react';

const VideoExplainer = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Automates 1:1 questions from your audience",
      color: "text-accent-blue"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Recommends products ethically and compliantly",
      color: "text-accent-purple"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Increases revenue through affiliate links and your store",
      color: "text-accent-yellow"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            What is an AI Health Twin?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Watch how leading experts are scaling their practice and income with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="relative bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors duration-300">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-80">Duration: 90 seconds</div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between text-sm text-text-light">
                <span>🎥 HD Quality with Subtitles</span>
                <span>🔊 Professional Voiceover</span>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                See Your AI Twin in Action
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Discover how your AI twin learns your expertise, communicates in your voice, and helps your audience while you focus on what matters most.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`${highlight.color} flex-shrink-0 mt-1`}>
                    {highlight.icon}
                  </div>
                  <div className="text-primary-900 font-medium leading-relaxed">
                    {highlight.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <span>Create Your Twin</span>
                <Clock className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExplainer;