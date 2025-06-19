import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      role: "Clinical Nutritionist",
      company: "Wellness Institute",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Re:Healthify transformed my practice. My AI twin handles initial consultations while I focus on complex cases. Revenue increased 400% in 6 months.",
      rating: 5
    },
    {
      name: "Marcus Thompson",
      role: "Fitness Influencer",
      company: "@FitWithMarcus",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The affiliate tracking is incredible. My AI twin recommends products authentically, and I can see exactly which recommendations drive sales. Game changer.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Holistic Health Coach",
      company: "Mind Body Wellness",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I was skeptical about AI, but this platform understands my philosophy perfectly. Clients love the 24/7 support, and I love the passive income stream.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      role: "Functional Medicine Doctor",
      company: "Optimal Health Clinic",
      image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The compliance features give me peace of mind. I can educate and guide patients without worrying about regulatory issues. Brilliant platform.",
      rating: 5
    },
    {
      name: "Angela Rodriguez",
      role: "Yoga & Mindfulness Teacher",
      company: "Peaceful Mind Studio",
      image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "My AI twin captures my gentle approach perfectly. Students get personalized guidance even when I'm teaching in-person classes. It's like having a clone!",
      rating: 5
    },
    {
      name: "David Park",
      role: "Sports Nutritionist",
      company: "Peak Performance Nutrition",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The analytics show me exactly what my audience wants to know. I create better content and my AI twin provides better recommendations. Win-win.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Trusted by Health Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how health professionals are transforming their practices and scaling their impact with AI digital twins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-accent-purple/20" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-yellow fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-secondary leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-primary-900">{testimonial.name}</div>
                  <div className="text-sm text-text-secondary">{testimonial.role}</div>
                  <div className="text-sm text-accent-purple font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-text-light mb-8">Trusted by leading health organizations</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-text-light">Mayo Clinic Partners</div>
            <div className="text-2xl font-bold text-text-light">Johns Hopkins Network</div>
            <div className="text-2xl font-bold text-text-light">Cleveland Clinic</div>
            <div className="text-2xl font-bold text-text-light">Stanford Medicine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;