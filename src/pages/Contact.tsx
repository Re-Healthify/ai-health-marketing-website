import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@rehealthify.com",
      action: "Send Email",
      gradient: "from-accent-blue to-accent-purple"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-accent-purple to-accent-blue"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Demo",
      description: "Book a personalized demo",
      contact: "30-minute consultation",
      action: "Book Demo",
      gradient: "from-accent-yellow to-accent-red"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 9 AM - 6 PM PST",
      action: "Start Chat",
      gradient: "from-accent-red to-accent-yellow"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Health Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@rehealthify.com"
    },
    {
      city: "New York",
      address: "456 Medical Technology Ave, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@rehealthify.com"
    },
    {
      city: "Austin",
      address: "789 Wellness Tech Blvd, Austin, TX 78701",
      phone: "+1 (555) 456-7890",
      email: "austin@rehealthify.com"
    }
  ];

  const supportOptions = [
    {
      title: "Technical Support",
      description: "Help with platform setup, integrations, and troubleshooting",
      hours: "24/7 for Enterprise, Business hours for others"
    },
    {
      title: "Sales Inquiries",
      description: "Questions about pricing, plans, and custom solutions",
      hours: "Monday - Friday, 9 AM - 6 PM PST"
    },
    {
      title: "Partnership Opportunities",
      description: "Interested in becoming a partner or integration",
      hours: "Monday - Friday, 9 AM - 5 PM PST"
    },
    {
      title: "Media & Press",
      description: "Press inquiries, interviews, and media resources",
      hours: "Monday - Friday, 9 AM - 5 PM PST"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Get in Touch
            <span className="block text-accent-purple">We're Here to Help</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
            Have questions about Re:Healthify? Want to see a demo? Our team of health tech experts is ready to help you transform your practice with AI.
          </p>
          <div className="flex items-center justify-center space-x-8 text-text-secondary">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Quick response time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Expert support team</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Personalized solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Choose How to Connect
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Multiple ways to get the support and information you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 border border-primary-100">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{method.title}</h3>
                <p className="text-text-secondary mb-4">{method.description}</p>
                <div className="text-accent-purple font-semibold mb-6">{method.contact}</div>
                <button className={`w-full bg-gradient-to-r ${method.gradient} text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-900 mb-2">
                      Company/Practice
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                      placeholder="Wellness Clinic"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-primary-900 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                    >
                      <option value="">Select your role</option>
                      <option value="doctor">Doctor/Physician</option>
                      <option value="nurse">Nurse/Nurse Practitioner</option>
                      <option value="therapist">Therapist/Counselor</option>
                      <option value="nutritionist">Nutritionist/Dietitian</option>
                      <option value="fitness">Fitness/Wellness Coach</option>
                      <option value="influencer">Health Influencer</option>
                      <option value="administrator">Healthcare Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-primary-900 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                  >
                    <option value="general">General Information</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Questions</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="enterprise">Enterprise Solutions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-colors duration-200"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Support Options */}
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-8">
                Support Options
              </h3>
              <div className="space-y-6">
                {supportOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-primary-100">
                    <h4 className="text-lg font-bold text-primary-900 mb-2">{option.title}</h4>
                    <p className="text-text-secondary mb-3">{option.description}</p>
                    <div className="text-sm text-accent-purple font-medium">{option.hours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Visit us at one of our offices or connect with us remotely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">{office.city}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent-purple flex-shrink-0" />
                    <span className="text-text-secondary">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent-purple flex-shrink-0" />
                    <span className="text-text-secondary">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Quick Answers
            </h2>
            <p className="text-xl text-text-secondary">
              Common questions we receive from health professionals
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started?",
                answer: "Most health professionals can set up their AI twin within 45 minutes. Our onboarding team provides white-glove support to ensure a smooth setup process."
              },
              {
                question: "Do you offer training and support?",
                answer: "Yes! We provide comprehensive training, documentation, video tutorials, and ongoing support. Enterprise customers get dedicated account managers."
              },
              {
                question: "Can I integrate with my existing systems?",
                answer: "Absolutely. We offer APIs and custom integrations for EMRs, practice management systems, and other healthcare technology platforms."
              },
              {
                question: "Is there a minimum contract period?",
                answer: "No long-term contracts required. All plans are month-to-month with a 30-day free trial. Enterprise customers can opt for annual contracts with additional discounts."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-primary-100">
                <h3 className="text-xl font-bold text-primary-900 mb-4">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;