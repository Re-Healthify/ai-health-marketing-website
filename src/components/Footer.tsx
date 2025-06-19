import React from 'react';
import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                Re:Healthify
              </span>
            </div>
            <p className="text-primary-300 leading-relaxed mb-6">
              Transforming health expertise into intelligent AI digital twins that engage, educate, and monetize 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-accent-purple transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-accent-purple transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-accent-purple transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-accent-purple transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">AI Digital Twins</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Analytics</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-purple" />
                <span className="text-primary-300">hello@rehealthify.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-purple" />
                <span className="text-primary-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-purple" />
                <span className="text-primary-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-primary-300 mb-6">Get the latest insights on AI in healthcare</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 rounded-l-lg focus:outline-none focus:border-accent-purple text-white"
              />
              <button className="bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3 rounded-r-lg font-semibold hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-300 text-sm mb-4 md:mb-0">
            © 2025 Re:Healthify. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;