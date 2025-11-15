import React, { useState, useEffect } from 'react';
import Logo from './assets/images/logo.PNG'
import vendor from './assets/images/vendor.jpg'

// --- SVG Icons ---
// Using inline SVGs as we can't import libraries in a single file.

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const IconShoppingCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const IconPayment = () => ( // Using a wallet icon for payment
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconTransparent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a1 1 0 011-1h14a1 1 0 011 1v5a.997.997 0 01-.293.707zM9 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const IconVerified = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const IconTruck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 000-2H8.95a2.5 2.5 0 01-4.9 0H3V5h14v5a1 1 0 002 0V5a1 1 0 00-1-1H3zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" />
  </svg>
);

const IconRecycle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 10-2 0v1.586l-1.293-1.293a1 1 0 10-1.414 1.414L7.586 6H6a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 101.414 1.414L9 9.414V11a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414L12.414 8H14a1 1 0 100-2h-1.586l1.293-1.293a1 1 0 00-1.414-1.414L11 4.586V3z" />
    <path d="M10 16a6 6 0 100-12 6 6 0 000 12zM10 18a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
);

const IconCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const IconDashboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>
);

const IconEarnings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8.433 7.418c.155-.103.346-.196.552-.257C9.46,6.99 10 7 10 7s.54.01 1.015.161c.206.061.397.154.552.257C12.348 8.048 13 8.686 13 9.5c0 .356-.11.748-.333 1.079l-.733.88c-.27.327-.417.712-.417 1.115v.426c0 .175-.043.345-.117.5a1 1 0 01-1.748-.87c.04-.117.06-.238.06-.363v-.426c0-.026 0-.051.002-.076a.027.027 0 00-.002-.076c-.023-.298-.168-.582-.38-.838l-.733-.88C8.11 10.248 8 9.856 8 9.5c0-.814.652-1.452 1.433-1.082zM10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z" />
  </svg>
);

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconScroll = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);


// --- Header Component ---
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src={Logo} alt="Trade2Cart Logo" className="h-10 w-10 rounded-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">How It Works</a>
          <a href="#for-vendors" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">For Vendors</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IconMenu />
        </button>

        {/* CTA (visible on desktop) */}
        <a href="/app/language" className="hidden md:inline-block text-sm font-medium bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-shadow shadow-md hover:shadow-lg">
          Schedule Pickup
        </a>
      </nav>

      {/* Mobile Menu (Conditionally rendered) */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <a href="#how-it-works" onClick={handleLinkClick} className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">How It Works</a>
          <a href="#for-vendors" onClick={handleLinkClick} className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">For Vendors</a>
          <a href="#faq" onClick={handleLinkClick} className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">FAQ</a>
          <a href="#contact" onClick={handleLinkClick} className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
          <a href="/app/language" onClick={handleLinkClick} className="block text-center px-6 py-4 bg-green-600 text-white font-semibold m-4 rounded-lg">
            Schedule Pickup
          </a>
        </div>
      )}
    </header>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section className="py-20 md:py-32 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
      Turn Your <span className="text-green-600">Scrap</span> into <span className="text-green-600">Cash</span>.
    </h1>
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
      Schedule a free doorstep pickup for your scrap and get paid fair prices, instantly. All from our network of verified local vendors.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="/app/language" // This directs users to your user app flow
        className="flex w-full sm:w-auto items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
        Sell Your Scrap
        <IconArrowRight />
      </a>
      <a
        href="https://vendor.trade2cart.in/register" // This directs to your vendor app
        target="_blank" rel="noopener noreferrer"
        className="flex w-full sm:w-auto items-center justify-center bg-white text-gray-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-0.5 transition-all duration-300">
        Join as a Vendor
      </a>
    </div>
  </section>
);

// --- How It Works Section ---
const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-white rounded-3xl shadow-lg">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      Sell Scrap in 3 Easy Steps
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-10">
      <StepCard
        icon={<IconShoppingCart />}
        title="1. Add Items to Cart"
        description="Select the scrap items you have. Our app shows you transparent, competitive rates for your location."
      />
      <StepCard
        icon={<IconCalendar />}
        title="2. Schedule a Pickup"
        description="Confirm your address and pick a convenient time. We'll assign a verified local vendor for you."
      />
      <StepCard
        icon={<IconPayment />}
        title="3. Get Paid Instantly"
        description="Our vendor arrives, weighs your items using a digital scale, and pays you on the spot. Simple and fast."
      />
    </div>
  </section>
);

const StepCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center h-20 w-20 bg-green-100 rounded-full mb-6 shadow-md">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

// --- Why Choose Us Section ---
const WhyChooseUs = () => (
  <section id="features" className="py-24">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      The Smartest Choice for Your Scrap
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <FeatureCard
        icon={<IconTransparent />}
        title="Transparent Pricing"
        description="See the rates for all scrap items before you book."
      />
      <FeatureCard
        icon={<IconVerified />}
        title="Verified Vendors"
        description="All our vendors are background-checked and professional."
      />
      <FeatureCard
        icon={<IconTruck />}
        title="Doorstep Convenience"
        description="No need to carry your scrap anywhere. We come to you."
      />
      <FeatureCard
        icon={<IconRecycle />}
        title="Eco-Friendly"
        description="We ensure your scrap is processed and recycled responsibly."
      />
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-500">{description}</p>
  </div>
);

// --- For Vendors Section ---
const ForVendors = () => (
  <section id="for-vendors" className="py-20 bg-white rounded-3xl shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-10">
      <div>
        <span className="text-green-600 font-semibold uppercase">For Vendors</span>
        <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
          Grow Your Scrap Business
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Stop searching for customers. Join our network and get a steady stream of verified pickup leads from your area, sent directly to your dashboard.
        </p>
        <ul className="space-y-4 mb-10">
          <li className="flex items-start gap-3 text-gray-700">
            <IconCheckCircle />
            <span className="text-lg">Get verified leads, not just calls.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <IconDashboard />
            <span className="text-lg">Manage all your assigned orders in one app.</span>
          </li>
          <li className="flex items-start gap-3 text-gray-700">
            <IconEarnings />
            <span className="text-lg">Process bills and track your earnings easily.</span>
          </li>
        </ul>
        <a
          href="https://vendor.trade2cart.in/register"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-900 transition-all">
          Register as a Vendor
          <IconArrowRight />
        </a>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <img src={vendor} alt="Vendor App Screenshot" className="rounded-2xl shadow-xl" />
      </div>
    </div>
  </section>
);

// --- FAQ Section ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-6 text-left"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <IconChevronDown />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-gray-600 p-6 pt-0">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => (
  <section id="faq" className="py-24">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      Frequently Asked Questions
    </h2>
    <div className="max-w-3xl mx-auto space-y-4">
      <FaqItem
        question="How do I get paid for my scrap?"
        answer="Our verified vendor will pay you directly in cash or via digital payment (like UPI) at the time of pickup, right after weighing your items."
      />
      <FaqItem
        question="What items can I sell?"
        answer="You can sell a wide variety of items, including newspapers, cardboard, plastic bottles, glass, and various metals. You can see the full list and current prices in our app after selecting your location."
      />
      <FaqItem
        question="[For Vendors] How do I get new orders?"
        answer="New orders are assigned to you by our admin team based on your location and availability. You will see them appear in the 'Assigned Orders' tab on your vendor dashboard."
      />
      <FaqItem
        question="Is this service free?"
        answer="Yes, the pickup service is completely free for users. You are paid the full amount quoted for your scrap items. Vendors pay a small commission to us for the verified leads."
      />
    </div>
  </section>
);

// --- Contact Section ---
const Contact = () => (
  <section id="contact" className="py-20 bg-green-600 rounded-3xl shadow-lg mb-24 text-white">
    <div className="max-w-3xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-green-100 mb-10">
        Have questions or need support? We're here to help.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="flex items-center gap-3">
          <IconMail />
          <a href="mailto:trade@trade2cart.in" className="text-xl font-semibold hover:underline">
            trade@trade2cart.in
          </a>
        </div>
        <div className="flex items-center gap-3">
          <IconPhone />
          <span className="text-xl font-semibold">+91 8903166106</span>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = ({ onModalOpen }) => (
  <footer className="bg-gray-800 text-gray-300 py-16">
    <div className="container mx-auto px-6 text-center">
      <p className="text-lg mb-8">"Transforming trash into treasure"</p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a href="/app/language" className="hover:text-white transition-colors">Sell Scrap</a>
        <a href="https://vendor.trade2cart.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vendor Portal</a>
        <button onClick={() => onModalOpen('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
        <button onClick={() => onModalOpen('terms')} className="hover:text-white transition-colors">Terms of Service</button>
        <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Trade2Cart. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Policy Modal Component ---
const PolicyModal = ({ modalType, onClose }) => {
  if (!modalType) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close on overlay click
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
      >
        <header className="flex-shrink-0 p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Legal Information</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <IconClose />
          </button>
        </header>
        <main className="overflow-y-auto p-6 md:p-8">
          {modalType === 'privacy' && <PrivacyPolicyContent />}
          {modalType === 'terms' && <TermsContent />}
        </main>
      </div>
    </div>
  );
};

// --- Modal Content ---
const PrivacyPolicyContent = () => (
  <div className="prose max-w-none text-gray-700">
    <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center"><IconLock /> Privacy Policy</div>
    <p className="text-xs text-gray-500">Effective Date: 23-06-2025 | Last Updated: 23-08-2025</p>
    <p className="mt-4">We value your privacy. This policy explains how we handle your data:</p>

    <h4 className="font-semibold text-gray-800 mt-6">Information We Collect</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Name, contact details, location, and booking information.</li>
      <li>Data collected when you use our app or website.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">How We Use Your Data</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>To process bookings and assign vendors.</li>
      <li>To send notifications and updates about your orders.</li>
      <li>To improve our services and prevent misuse.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">Data Sharing</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>We share your details only with assigned vendors to complete your bookings.</li>
      <li>We do not sell your personal data to third parties.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">Data Retention & Your Rights</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>We keep your booking history for legal and operational purposes.</li>
      <li>You can request access to your data or ask for deletion by emailing <a href="mailto:trade@trade2cart.in" className="text-blue-600 hover:underline">trade@trade2cart.in</a>.</li>
    </ul>
  </div>
);

const TermsContent = () => (
  <div className="prose max-w-none text-gray-700">
    <div className="text-2xl font-bold text-gray-900 mb-1 flex items-center"><IconScroll /> Terms & Conditions</div>
    <p className="text-xs text-gray-500">Effective Date: 23-06-2025 | Last Updated: 23-08-2025</p>
    <p className="mt-4">Welcome to Trade2Cart! By using our services, you agree to the following terms:</p>

    <h4 className="font-semibold text-gray-800 mt-6">Platform Role</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Trade2Cart is a mediator between users and vendors.</li>
      <li>We do not buy, sell, or collect scrap directly.</li>
      <li>All transactions, including payments, happen directly between the user and the vendor.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">User Responsibilities</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Provide accurate booking and location details.</li>
      <li>Be available at the scheduled pickup time.</li>
      <li>Cancelations are not available once the booking is confirmed.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">Vendor Responsibilities</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Vendors must pay users directly at pickup.</li>
      <li>Trade2Cart is not liable for delayed or failed payments from vendors.</li>
    </ul>

    <h4 className="font-semibold text-gray-800 mt-6">Fees & Disputes</h4>
    <ul className="list-disc list-inside space-y-1">
      <li>Any disputes must be resolved directly between the user and the vendor. Trade2Cart will not be responsible for lost payments or disagreements.</li>
    </ul>
  </div>
);


// --- Main App Component ---
export default function App() {
  const [modalType, setModalType] = useState(null); // 'privacy', 'terms', or null

  // Handle modal state
  const handleModalOpen = (type) => setModalType(type);
  const handleModalClose = () => setModalType(null);

  // Add/remove body scroll lock when modal is open/closed
  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalType]);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      <main className="container mx-auto px-6">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <ForVendors />
        <Faq />
        <Contact />
      </main>

      <Footer onModalOpen={handleModalOpen} />

      <PolicyModal modalType={modalType} onClose={handleModalClose} />
    </div>
  );
}