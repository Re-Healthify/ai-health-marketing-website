import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/how-it-works', label: 'How It Works' },
    { 
      path: '/solutions', 
      label: 'Solutions',
      hasDropdown: true,
      dropdownItems: [
        { path: '/solutions/experts-influencers', label: 'Experts and Influencers' },
        { path: '/solutions/brands', label: 'Brands' }
      ]
    },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleSolutionsMouseEnter = () => {
    setIsSolutionsDropdownOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    setIsSolutionsDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 z-10">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-xl shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Re:Healthify
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleSolutionsMouseEnter}
                      onMouseLeave={handleSolutionsMouseLeave}
                    >
                      <button
                        className={`flex items-center space-x-1 hover:text-accent-purple transition-colors duration-200 font-medium ${
                          isActive(item.path) || location.pathname.startsWith('/solutions')
                            ? 'text-accent-purple border-b-2 border-accent-purple pb-1'
                            : 'text-primary-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isSolutionsDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-primary-100 py-2 z-50 transition-all duration-200 ${
                        isSolutionsDropdownOpen 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-3 text-primary-900 hover:text-accent-purple hover:bg-accent-purple/5 transition-colors duration-200 font-medium"
                            onClick={() => setIsSolutionsDropdownOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`hover:text-accent-purple transition-colors duration-200 font-medium ${
                        isActive(item.path)
                          ? 'text-accent-purple border-b-2 border-accent-purple pb-1'
                          : 'text-primary-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg font-medium text-primary-900 hover:text-accent-purple transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2 rounded-lg font-medium hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-primary-900 hover:text-accent-purple transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-primary-100">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                        className={`flex items-center justify-between w-full px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                          location.pathname.startsWith('/solutions')
                            ? 'text-accent-purple bg-accent-purple/10'
                            : 'text-primary-900 hover:text-accent-purple hover:bg-accent-purple/5'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isSolutionsDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {isSolutionsDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                                isActive(dropdownItem.path)
                                  ? 'text-accent-purple bg-accent-purple/10'
                                  : 'text-primary-900 hover:text-accent-purple hover:bg-accent-purple/5'
                              }`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsSolutionsDropdownOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-accent-purple bg-accent-purple/10'
                          : 'text-primary-900 hover:text-accent-purple hover:bg-accent-purple/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t border-primary-200 pt-3 mt-3">
                <button className="block w-full text-left px-3 py-2 text-primary-900 hover:text-accent-purple font-medium rounded-lg transition-colors duration-200">
                  Sign In
                </button>
                <button className="block w-full mt-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white px-3 py-2 rounded-lg font-medium hover:from-accent-purple/90 hover:to-accent-blue/90 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;