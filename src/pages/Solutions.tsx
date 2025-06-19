import React from 'react';
import { Heart, Building2, Users, Stethoscope, Dumbbell, Brain, ArrowRight, CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Clinical Professionals",
      subtitle: "Doctors, Nurses, Therapists",
      description: "Scale your clinical expertise while maintaining compliance and patient safety standards.",
      features: [
        "HIPAA-compliant patient interactions",
        "Evidence-based recommendation engine",
        "Clinical protocol automation",
        "Telehealth integration",
        "Continuing education content delivery"
      ],
      benefits: [
        "Reduce administrative burden by 60%",
        "Increase patient engagement by 300%",
        "Generate passive income streams",
        "Expand practice reach globally"
      ],
      gradient: "from-accent-blue to-accent-purple",
      bgGradient: "from-accent-blue/10 to-accent-purple/10",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Fitness & Wellness Coaches",
      subtitle: "Personal Trainers, Nutritionists, Wellness Experts",
      description: "Transform your coaching methodology into an always-available AI mentor for your clients.",
      features: [
        "Personalized workout and meal planning",
        "Progress tracking and motivation",
        "Supplement recommendation system",
        "Community building tools",
        "Brand partnership opportunities"
      ],
      benefits: [
        "Coach 10x more clients simultaneously",
        "24/7 client support and motivation",
        "Automated program delivery",
        "Increased retention rates by 85%"
      ],
      gradient: "from-accent-yellow to-accent-red",
      bgGradient: "from-accent-yellow/10 to-accent-red/10",
      image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Mental Health Professionals",
      subtitle: "Therapists, Counselors, Mindfulness Coaches",
      description: "Provide continuous support and resources while maintaining therapeutic boundaries.",
      features: [
        "Crisis intervention protocols",
        "Mindfulness and meditation guidance",
        "Therapeutic exercise delivery",
        "Progress monitoring tools",
        "Resource recommendation system"
      ],
      benefits: [
        "Extend therapeutic support 24/7",
        "Reduce session no-shows by 40%",
        "Provide immediate coping resources",
        "Scale impact to underserved populations"
      ],
      gradient: "from-accent-purple to-accent-red",
      bgGradient: "from-accent-purple/10 to-accent-red/10",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Health Influencers",
      subtitle: "Content Creators, Health Advocates, Wellness Bloggers",
      description: "Monetize your influence through authentic, AI-powered product recommendations and audience engagement.",
      features: [
        "Authentic voice and personality cloning",
        "Product verification workflow",
        "Audience sentiment analysis",
        "Multi-platform content distribution",
        "Affiliate commission tracking"
      ],
      benefits: [
        "Increase engagement by 400%",
        "Generate revenue while sleeping",
        "Maintain authentic brand voice",
        "Scale across multiple platforms"
      ],
      gradient: "from-accent-blue to-accent-yellow",
      bgGradient: "from-accent-blue/10 to-accent-yellow/10",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Healthcare Systems",
      description: "Enterprise solutions for hospitals, clinics, and health networks"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Wellness Centers",
      description: "Integrated platforms for spas, retreats, and wellness facilities"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Tech Companies",
      description: "API integrations for existing health and wellness applications"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions for Every
            <span className="block text-accent-yellow">Health Professional</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto">
            Whether you're a clinical expert, wellness coach, or health influencer, Re:Healthify has the perfect AI solution to scale your impact and income.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-xl">
              Find Your Solution
            </button>
            <button className="text-white hover:text-accent-blue transition-colors duration-300 font-semibold underline">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Tailored Solutions for Your Specialty
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Each solution is specifically designed for your profession's unique needs, compliance requirements, and growth opportunities.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                <div className="flex-1">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white mb-6`}>
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent mb-6`}>
                    {solution.subtitle}
                  </p>
                  
                  <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-primary-900 mb-4">Key Features</h4>
                      <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient} mt-2 flex-shrink-0`}></div>
                            <span className="text-text-secondary text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-primary-900 mb-4">Benefits</h4>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent-purple mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className={`bg-gradient-to-r ${solution.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${solution.bgGradient} rounded-3xl p-8 shadow-xl`}>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Enterprise & Industry Solutions
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Custom implementations for healthcare organizations, wellness enterprises, and health technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 text-center">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Discuss Enterprise Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">
            Success Across All Specialties
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Health professionals from every specialty are transforming their practices with Re:Healthify
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-purple mb-2">500+</div>
              <div className="text-text-secondary">Clinical Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-blue mb-2">1,200+</div>
              <div className="text-text-secondary">Fitness Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-2">300+</div>
              <div className="text-text-secondary">Mental Health Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-red mb-2">2,000+</div>
              <div className="text-text-secondary">Health Influencers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;