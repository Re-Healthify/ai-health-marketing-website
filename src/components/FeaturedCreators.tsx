import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const FeaturedCreators = () => {
  const creators = [
    {
      name: "Dr. Maya Chen",
      title: "Gut Health Specialist",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "My AI twin handles 80% of patient questions, letting me focus on complex cases.",
      specialty: "Digestive Health",
      followers: "125K"
    },
    {
      name: "Marcus Rodriguez",
      title: "Fitness Coach",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "I'm coaching 10x more people while maintaining that personal touch.",
      specialty: "Strength Training",
      followers: "89K"
    },
    {
      name: "Dr. Sarah Kim",
      title: "Mental Health Therapist",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "24/7 support for my clients without compromising therapeutic boundaries.",
      specialty: "Anxiety & Stress",
      followers: "67K"
    },
    {
      name: "James Wilson",
      title: "Nutrition Expert",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "My AI twin recommends supplements I trust, generating passive income.",
      specialty: "Sports Nutrition",
      followers: "156K"
    },
    {
      name: "Dr. Lisa Park",
      title: "Functional Medicine",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Scaling personalized medicine has never been easier or more compliant.",
      specialty: "Hormone Health",
      followers: "203K"
    },
    {
      name: "Angela Torres",
      title: "Wellness Coach",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "My community gets instant, personalized guidance even when I'm offline.",
      specialty: "Holistic Wellness",
      followers: "94K"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Meet the Experts Already Using Re:Healthify
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From clinicians to creators, here's how real users are scaling impact with AI.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-accent-blue/20"
                />
                <div>
                  <div className="font-bold text-primary-900">{creator.name}</div>
                  <div className="text-text-secondary text-sm">{creator.title}</div>
                  <div className="text-accent-purple text-xs font-medium">{creator.followers} followers</div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-text-secondary italic leading-relaxed">
                  "{creator.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="text-text-light">Specialty:</div>
                  <div className="font-medium text-primary-900">{creator.specialty}</div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent-blue hover:text-accent-purple">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {creators.map((creator, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-primary-900 text-sm">{creator.name}</div>
                    <div className="text-text-secondary text-xs">{creator.title}</div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm italic mb-4">
                  "{creator.quote}"
                </p>
                <div className="text-xs text-accent-purple font-medium">
                  {creator.specialty} • {creator.followers}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Join These Experts</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;