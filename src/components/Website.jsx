import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Website() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Navigation component
  const Navigation = () => (
    <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
        >
          <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white font-bold text-sm">
            CO
          </div>
          <span className="font-semibold text-gray-900">Company</span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setCurrentPage('pricing')}
            className="text-gray-700 hover:text-gray-900 transition"
          >
            Pricing
          </button>
          <button
            onClick={() => setCurrentPage('install')}
            className="text-gray-700 hover:text-gray-900 transition font-medium"
          >
            Install
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 transition"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage('login')}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-gray-400 transition"
            >
              Sign in
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 px-4 flex flex-col gap-4">
          <button
            onClick={() => {
              setCurrentPage('pricing');
              setMobileMenuOpen(false);
            }}
            className="text-gray-700 text-left"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              setCurrentPage('install');
              setMobileMenuOpen(false);
            }}
            className="text-gray-700 text-left font-medium"
          >
            Install
          </button>
          <button
            onClick={() => {
              setCurrentPage('login');
              setMobileMenuOpen(false);
            }}
            className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 text-left"
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );

  // Smiley face illustration
  const SmileyIllustration = ({ size = 'large', mood = 'happy' }) => {
    const sizeClass = size === 'large' ? 'w-48 h-48' : 'w-32 h-32';
    return (
      <div className={`${sizeClass} relative mx-auto`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#D1D5DB" strokeWidth="2" />
          <circle cx="75" cy="85" r="8" fill="#6B7280" />
          <circle cx="125" cy="85" r="8" fill="#6B7280" />
          {mood === 'happy' && (
            <path d="M 75 120 Q 100 135 125 120" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
          )}
          {mood === 'relieved' && (
            <path d="M 75 125 Q 100 130 125 125" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </div>
    );
  };

  // Envelope/message illustration
  const EnvelopeIllustration = () => (
    <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto opacity-60">
      <rect x="20" y="60" width="160" height="100" fill="none" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M 20 60 L 100 110 L 180 60" fill="none" stroke="#D1D5DB" strokeWidth="2" />
    </svg>
  );

  // HOME PAGE
  const HomePage = () => (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Headline&mdash;the relief you&apos;ve been needing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Subheading naming who this is for
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('signup')}
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Get started free
              </button>
              <button className="px-8 py-3 text-gray-700 hover:text-gray-900 transition">
                See how it works
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <SmileyIllustration size="large" mood="happy" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          An app designed for you
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {['Create projects', 'Collaborate', 'Deploy instantly'].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <EnvelopeIllustration />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature}</h3>
              <p className="text-gray-600 text-sm">
                Description overview of this feature and its benefits
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            onClick={() => setCurrentPage('signup')}
            className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
          >
            Free account
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-gray-600 mb-8">Trusted by</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-24 h-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-gray-400"
              >
                Logo
              </div>
            ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Premium Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gray-200 rounded" />
            <span className="font-semibold text-gray-900">Premium +</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">More power for teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {['Advanced analytics', 'Team collaboration', 'Priority support'].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <EnvelopeIllustration />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">+ {feature}</h3>
              <p className="text-gray-600 text-sm">
                Description overview of this premium feature
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => setCurrentPage('pricing')}
            className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition"
          >
            Become a member
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8">Join free, upgrade whenever you like</p>
        <button
          onClick={() => setCurrentPage('signup')}
          className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition inline-block"
        >
          Create free account
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Have questions? <a href="#" className="text-indigo-600 hover:text-indigo-700">See our FAQ</a>
        </p>
      </section>
    </div>
  );

  // SIGNUP PAGE
  const SignupPage = () => (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
          <p className="text-gray-600 mb-8">Start free, upgrade anytime</p>

          <div className="space-y-4 mb-8">
            <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              Continue with Google
            </button>
            <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              Continue with Apple
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or sign up with email</span>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            onClick={() => {
              setCurrentPage('home');
              setIsLoggedIn(true);
            }}
            className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Create account
          </button>

          <p className="text-center text-gray-600 mt-6">
            Have an account?{' '}
            <button
              onClick={() => setCurrentPage('login')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Log in
            </button>
          </p>
        </div>

        {/* Right Illustration Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border border-gray-300 rounded"
                  style={{
                    left: ((i * 37) % 100) + '%',
                    top: ((i * 53) % 100) + '%',
                    transform: `rotate(${(i * 17) % 45}deg)`,
                  }}
                />
              ))}
          </div>
          <div className="relative z-10 text-center">
            <SmileyIllustration size="large" mood="happy" />
            <p className="text-gray-700 font-medium mt-8">Welcomed in seconds</p>
            <p className="text-sm text-gray-500 mt-2">Get started in moments, not hours</p>
          </div>
        </div>
      </div>
    </div>
  );

  // LOGIN PAGE
  const LoginPage = () => (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 py-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600 mb-8">Log in to your account</p>

          <div className="space-y-4 mb-8">
            <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              Continue with Google
            </button>
            <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
              Continue with Apple
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or log in with email</span>
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button className="text-right mt-2 text-sm text-indigo-600 hover:text-indigo-700">
            Forgot password?
          </button>

          <button
            onClick={() => {
              setCurrentPage('home');
              setIsLoggedIn(true);
            }}
            className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Log in
          </button>

          <p className="text-center text-gray-600 mt-6">
            New here?{' '}
            <button
              onClick={() => setCurrentPage('signup')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Right Illustration Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border border-gray-300 rounded"
                  style={{
                    left: ((i * 41) % 100) + '%',
                    top: ((i * 29) % 100) + '%',
                    transform: `rotate(${(i * 23) % 45}deg)`,
                  }}
                />
              ))}
          </div>
          <div className="relative z-10 text-center">
            <SmileyIllustration size="large" mood="relieved" />
            <p className="text-gray-700 font-medium mt-8">Right where you left off</p>
            <p className="text-sm text-gray-500 mt-2">Continue your work seamlessly</p>
          </div>
        </div>
      </div>
    </div>
  );

  // PRICING PAGE
  const PricingPage = () => (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600">One plan does it all</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-20">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
            <p className="text-3xl font-bold text-gray-900 mb-8">$0<span className="text-lg text-gray-600">/month</span></p>
            <ul className="space-y-4 mb-8">
              {['Basic features', '1 project', 'Community support', 'Limited storage'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">&minus;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setCurrentPage('signup')}
              className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Get started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border-2 border-indigo-600 rounded-2xl p-8 bg-indigo-50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Recommended
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
            <p className="text-3xl font-bold text-gray-900 mb-8">$12<span className="text-lg text-gray-600">/month</span></p>
            <ul className="space-y-4 mb-8">
              {['Everything in free', 'Unlimited projects', 'Priority support', 'Early access'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">&minus;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setCurrentPage('signup')}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Upgrade now
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your billing period.' },
              { q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.' },
              { q: 'Is there a free trial?', a: 'Our free plan serves as a trial, letting you explore core features before upgrading to Premium.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition transform ${expandedFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // INSTALL PAGE
  const InstallPage = () => (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Download Section */}
        <div className="text-center mb-16">
          <SmileyIllustration size="large" mood="happy" />
          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-2">Download for Mac</h1>
          <p className="text-gray-600 mb-8">Version 4.2 - macOS 12 or later</p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition mb-8">
            Download
          </button>
        </div>

        {/* Platform Options */}
        <div className="mb-16">
          <p className="text-center text-gray-600 mb-6">Also available for</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Windows', 'Linux', 'iOS', 'Android'].map((platform, i) => (
              <button
                key={i}
                className="py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Installation steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Download',
                description: 'Get the installer file',
              },
              {
                number: '2',
                title: 'Run installer',
                description: 'Follow on-screen steps',
              },
              {
                number: '3',
                title: 'Sign in',
                description: 'Use your account',
              },
            ].map((step, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-400 mb-4">{step.number}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // FOOTER
  const Footer = () => (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Download</a></li>
              <li><a href="#" className="hover:text-gray-900">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Docs</a></li>
              <li><a href="#" className="hover:text-gray-900">Help center</a></li>
              <li><a href="#" className="hover:text-gray-900">Community</a></li>
              <li><a href="#" className="hover:text-gray-900">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Security</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-teal-600 rounded flex items-center justify-center text-white text-xs font-bold">
                CO
              </div>
              <span className="font-semibold text-gray-900">Company</span>
            </div>
            <p className="text-sm text-gray-600">Building something people love</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            &copy; 2026 Company name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Router */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'signup' && <SignupPage />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'install' && <InstallPage />}
      </main>

      <Footer />
    </div>
  );
}
