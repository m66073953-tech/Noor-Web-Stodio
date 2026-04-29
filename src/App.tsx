/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronRight, 
  Check, 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Menu,
  X,
  Send,
  Lock
} from 'lucide-react';
import { SERVICES, PROJECTS, PORTFOLIO_VIDEOS, REVIEWS } from './constants';

// --- Components ---

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TermsPage = () => (
  <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
    <h1 className="text-4xl md:text-6xl mb-12 italic text-gold">Terms & Conditions / Agency Rules</h1>
    
    <div className="space-y-12 text-text-light/80 font-light leading-relaxed">
      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">1. Project Initiation</h2>
        <p className="mb-4">To initiate any project, an upfront commitment is required as established during the consultation. The remaining balance must be cleared upon project completion and before final deployment or handover of assets.</p>
        <p>We accept various secure payment methods which will be disclosed during the billing phase.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">2. Delivery and Revision Policy</h2>
        <p className="mb-4">Project timelines are established during the initial consultation. Delays in client feedback may affect the final delivery date.</p>
        <p>Each package includes a specific number of revisions. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">3. Client Responsibilities</h2>
        <p>Clients are expected to provide all necessary content, branding assets, and feedback in a timely manner. NoorWeb Studio is not responsible for delays caused by missing client assets.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">4. Confidentiality, Copyright, & Intellectual Property</h2>
        <p className="mb-4">All communications and project details are kept strictly confidential.</p>
        <p>Upon full payment, the client retains full ownership and copyright of the final delivered product. NoorWeb Studio reserves the right to showcase the completed work in our portfolio unless a Non-Disclosure Agreement (NDA) is signed.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">5. Client Support Policy</h2>
        <p>We provide full assistance, guidance, and troubleshooting during the project development phase. Post-launch support is available for 30 days to ensure smooth operation. Extended maintenance packages can be arranged separately.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">6. Project Cancellation Policy</h2>
        <p>If the client cancels after the project starts, the advance payment is non-refundable.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">7. Delay Policy</h2>
        <p>If the client does not respond for 14 days, the project may be temporarily paused.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">8. Extra Work Charges</h2>
        <p>Extra features outside the agreed scope will be billed separately.</p>
      </section>

      <section>
        <h2 className="text-2xl mb-4 text-text-light italic">9. Third-Party Services Disclaimer</h2>
        <p>NoorWeb Studio is not responsible for domain, hosting, or third-party service issues.</p>
      </section>
    </div>
  </div>
);

const Navbar = ({ onHomeClick }: { onHomeClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-bg/80 backdrop-blur-xl py-4 border-b border-accent/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={onHomeClick} className="group flex items-center space-x-6">
          <div className="w-12 h-12 border-2 border-gold flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-gold font-display text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">N</span>
          </div>
          <span className="text-3xl font-display font-bold text-gold tracking-tighter italic">
            NoorWeb <span className="text-text-light">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={onHomeClick}
              className="text-xs uppercase tracking-[0.2em] font-medium text-text-light/60 hover:text-gold transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-2xl border-b border-accent/10 p-10 md:hidden flex flex-col space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => {
                  onHomeClick();
                  setIsMobileMenuOpen(false);
                }}
                className="text-2xl font-display italic text-text-light/60 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/923257591824" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-50 bg-accent text-bg p-4 rounded-full shadow-[0_0_30px_rgba(74,144,226,0.3)] hover:scale-110 transition-all duration-500 border border-accent/20"
  >
    <WhatsAppIcon size={32} />
  </a>
);

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xzdjbqwr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30">
          <Check className="text-gold" size={40} />
        </div>
        <h3 className="text-3xl font-display italic mb-4">Inquiry Received</h3>
        <p className="text-text-light/60">Our strategists will review your project and contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto glass-dark p-5 md:p-10 border border-accent/10 rounded-none">
      <div className="mb-10 flex justify-between">
        {[1, 2, 3, 4, 5].map((s) => (
          <div 
            key={s} 
            className={`h-0.5 flex-1 mx-1 transition-colors duration-700 ${step >= s ? 'bg-accent' : 'bg-accent/10'}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <label className="block text-xs font-medium mb-4 uppercase tracking-[0.3em] text-gold">Identity</label>
            <input 
              type="text" 
              className="w-full bg-surface/30 text-text-light p-4 md:p-5 border border-accent/20 focus:border-accent outline-none transition-all placeholder:text-text-light/20"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <button onClick={handleNext} disabled={!formData.name} className="btn-elegant mt-8 w-full">Continue</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <label className="block text-xs font-medium mb-4 uppercase tracking-[0.3em] text-gold">Digital Address</label>
            <input 
              type="email" 
              className="w-full bg-surface/30 text-text-light p-4 md:p-5 border border-accent/20 focus:border-accent outline-none transition-all placeholder:text-text-light/20"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <div className="flex space-x-4 mt-8">
              <button onClick={handleBack} className="px-8 py-4 border border-accent/20 text-text-light/60 hover:bg-accent/5 transition-all">Back</button>
              <button onClick={handleNext} disabled={!formData.email} className="btn-elegant flex-1">Next Step</button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <label className="block text-xs font-medium mb-4 uppercase tracking-[0.3em] text-gold">Direct Line</label>
            <input 
              type="tel" 
              className="w-full bg-surface/30 text-text-light p-4 md:p-5 border border-accent/20 focus:border-accent outline-none transition-all placeholder:text-text-light/20"
              placeholder="+92 300 000 0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <div className="flex space-x-4 mt-8">
              <button onClick={handleBack} className="px-8 py-4 border border-accent/20 text-text-light/60 hover:bg-accent/5 transition-all">Back</button>
              <button onClick={handleNext} className="btn-elegant flex-1">Next Step</button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <label className="block text-xs font-medium mb-4 uppercase tracking-[0.3em] text-gold">Growth System</label>
            <select 
              className="w-full bg-surface/30 text-text-light p-4 md:p-5 border border-accent/20 focus:border-accent outline-none appearance-none cursor-pointer"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="" className="bg-bg">Select a system</option>
              {SERVICES.map(s => <option key={s.id} value={s.title} className="bg-bg">{s.title}</option>)}
            </select>
            <div className="flex space-x-4 mt-8">
              <button onClick={handleBack} className="px-8 py-4 border border-accent/20 text-text-light/60 hover:bg-accent/5 transition-all">Back</button>
              <button onClick={handleNext} className="btn-elegant flex-1">Next Step</button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="step5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <label className="block text-xs font-medium mb-4 uppercase tracking-[0.3em] text-gold">Project Vision</label>
            <textarea 
              className="w-full bg-surface/30 text-text-light p-4 md:p-5 border border-accent/20 focus:border-accent outline-none min-h-[150px] transition-all placeholder:text-text-light/20"
              placeholder="Describe your digital growth goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="flex space-x-4 mt-8">
              <button onClick={handleBack} className="px-8 py-4 border border-accent/20 text-text-light/60 hover:bg-accent/5 transition-all">Back</button>
              <button onClick={handleSubmit} disabled={isSubmitting} className="btn-elegant flex-1 flex items-center justify-center space-x-3">
                {isSubmitting ? 'Transmitting...' : <><span>Initialize</span> <Send size={16} /></>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'terms'>('home');

  return (
    <div className="min-h-screen selection:bg-accent selection:text-bg">
      <Navbar onHomeClick={() => setCurrentView('home')} />
      <WhatsAppButton />

      {currentView === 'terms' ? (
        <TermsPage />
      ) : (
        <>
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-32">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-surface/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-forest/20 blur-[150px] rounded-full" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-earth/20 blur-[150px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent font-medium tracking-[0.5em] uppercase text-[10px] mb-8 block">Smart Digital Solutions</span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display leading-[1] mb-10 italic">
              Digital <span className="text-gold">Growth</span> <br />
              Through Technology
            </h1>
            <p className="text-lg md:text-xl text-text-light/50 mb-12 max-w-xl leading-relaxed font-light">
              NoorWeb Studio builds custom websites and AI solutions that help your business grow and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
              <a href="#contact" className="btn-elegant text-center">Start Growing</a>
              <a href="#contact" className="px-10 py-4 border border-accent/20 text-text-light/60 hover:bg-accent/5 transition-all text-center backdrop-blur-sm">Get a Consultation</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-none overflow-hidden border border-accent/20 shadow-[0_0_80px_rgba(74,144,226,0.25)]">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=2000" 
                alt="NoorWeb Studio - Professional Digital Partnership" 
                className="w-full h-auto transition-all duration-1000 brightness-110 saturate-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40" />
            </div>
            <div className="absolute -inset-8 border border-accent/10 rounded-none -z-10 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-surface/20 border-y border-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl mb-12 italic">The Studio</h2>
              <div className="w-32 h-0.5 bg-accent/30 mb-12" />
              <p className="text-2xl font-display italic leading-relaxed mb-10 text-text-light/80">
                Creating digital tools where great design and smart technology meet.
              </p>
              <p className="text-text-light/40 leading-relaxed mb-10 font-light text-lg">
                NoorWeb Studio is a digital growth agency. We specialize in building custom websites and marketing systems that help brands grow online and reach more customers.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="glass-dark p-10 border-l-2 border-accent/30">
                <h3 className="text-2xl mb-6 text-gold italic">Our Vision</h3>
                <p className="text-text-light/40 font-light leading-relaxed">To change the digital landscape by using smart technology in every part of business growth, ensuring our clients stay ahead of their competition.</p>
              </div>
              <div className="glass-dark p-10 border-l-2 border-gold/30">
                <h3 className="text-2xl mb-6 text-accent italic">Why NoorWeb?</h3>
                <p className="text-text-light/40 font-light leading-relaxed">We do more than build websites; we create digital tools that drive growth. Our team combines design and technology to deliver real results.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl mb-8 italic">Our Services</h2>
            <p className="text-text-light/30 max-w-2xl mx-auto font-light tracking-widest uppercase text-xs">Sophisticated systems for the digital frontier.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass-dark p-6 md:p-8 border border-accent/5 hover:border-accent/30 transition-all duration-700"
              >
                <div className="aspect-[16/10] mb-6 md:mb-8 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 brightness-110 saturate-125"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h3 className="text-xl md:text-2xl mb-3 md:mb-4 italic text-gold">{service.title}</h3>
                <p className="text-xs md:text-sm text-text-light/40 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-forest/5 border-y border-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl mb-6 italic">Neural Assets</h2>
              <p className="text-text-light/30 tracking-[0.3em] uppercase text-[10px]">A portfolio of autonomous success.</p>
            </div>
            <div className="h-px flex-1 bg-accent/10 mx-12 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Video Projects */}
            {PORTFOLIO_VIDEOS.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden bg-bg aspect-[4/5] border border-accent/5 cursor-pointer"
              >
                <video 
                  src={project.videoUrl} 
                  poster={project.image}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 brightness-110 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700 flex flex-col justify-end p-10">
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.category}</span>
                  <h3 className="text-text-light text-3xl mb-4 italic">{project.title}</h3>
                  <p className="text-text-light/40 text-sm mb-8 font-light leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Demo Projects */}
            {PROJECTS.map((project, i) => (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" key={project.id}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (PORTFOLIO_VIDEOS.length + i) * 0.1 }}
                  className="relative group overflow-hidden bg-bg aspect-[4/5] border border-accent/5 cursor-pointer h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 brightness-110 saturate-125"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700 flex flex-col justify-end p-10">
                    <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.category}</span>
                    <h3 className="text-text-light text-3xl mb-4 italic">{project.title}</h3>
                    <p className="text-text-light/40 text-sm mb-8 font-light leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="text-gold flex items-center space-x-3 text-xs tracking-widest uppercase font-bold hover:text-accent transition-colors group/btn">
                      <span>View Live Demo</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-5xl md:text-6xl mb-8 italic">Client Echoes</h2>
           <p className="text-text-light/30 tracking-widest uppercase text-xs mb-24">Testimonials from the global elite.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {REVIEWS.filter(r => !r.hidden).map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-10 border border-accent/5 hover:border-accent/20 transition-all duration-700 flex flex-col"
              >
                {review.videoUrl ? (
                  <div className="relative w-full aspect-[9/16] mb-8 overflow-hidden border border-accent/10 rounded-lg shadow-lg">
                    <video 
                      src={review.videoUrl} 
                      poster={review.image}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                ) : (
                  <p className="text-text-light/60 italic mb-10 leading-relaxed font-light flex-grow">"{review.content}"</p>
                )}
                
                <div className="flex text-gold mb-8 space-x-1">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-none border border-gold/30 object-cover brightness-110 saturate-125"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-text-light font-medium italic leading-none mb-1">{review.name}</h4>
                      <p className="text-[10px] text-text-light/30 uppercase tracking-widest">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-10 italic leading-tight">
                Initiate <br /> 
                <span className="text-gold">Growth</span>
              </h2>
              <p className="text-text-light/40 text-base md:text-lg mb-8 md:mb-16 leading-relaxed font-light max-w-lg">
                Our strategists are ready to architect your digital future. Begin the transmission of your vision.
              </p>
              
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-accent/10 flex items-center justify-center text-accent group-hover:border-accent transition-all duration-500 flex-shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-text-light/20 mb-1 md:mb-2">Transmission</p>
                    <a href="mailto:noorwebstodio@gmail.com" className="text-lg md:text-xl text-text-light/80 hover:text-gold transition-colors italic truncate block max-w-[200px] sm:max-w-none">noorwebstodio@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6 md:space-x-8 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 border border-accent/10 flex items-center justify-center text-accent group-hover:border-accent transition-all duration-500 flex-shrink-0">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-text-light/20 mb-1 md:mb-2">Direct Line</p>
                    <a href="tel:+923257591824" className="text-lg md:text-xl text-text-light/80 hover:text-gold transition-colors italic">+{92} 325 7591824</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-20 p-6 md:p-10 border border-accent/5 glass-dark">
                <div className="flex items-center space-x-4 mb-6">
                  <Lock className="text-accent" size={14} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-light/40">Encrypted Transmission</span>
                </div>
                <p className="text-xs text-text-light/20 leading-relaxed font-light">Your data is processed through secure neural channels. Confidentiality is our primary protocol.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 border border-accent/5 -z-10 translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* Footer */}
      <footer className="bg-bg border-t border-accent/5 pt-16 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 md:gap-20 mb-16 md:mb-24">
            <div>
              <a href="#home" className="group flex items-center space-x-3 mb-8 md:mb-10">
                <div className="w-10 h-10 border border-gold flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-gold font-display text-base -rotate-45 group-hover:rotate-0 transition-transform duration-500">N</span>
                </div>
                <span className="text-2xl font-display font-bold text-gold tracking-tighter italic">
                  NoorWeb <span className="text-text-light">Studio</span>
                </span>
              </a>
              <p className="text-text-light/20 text-sm leading-relaxed max-w-xs font-light">
                Architecting the digital growth systems of tomorrow. International excellence in AI-powered scaling.
              </p>
            </div>
            
            <div>
              <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 md:mb-10">Navigation</h4>
              <ul className="space-y-4 md:space-y-6">
                <li><button onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} className="text-text-light/40 hover:text-gold transition-all text-xs tracking-widest uppercase">Home</button></li>
                <li><button onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} className="text-text-light/40 hover:text-gold transition-all text-xs tracking-widest uppercase">About</button></li>
                <li><button onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} className="text-text-light/40 hover:text-gold transition-all text-xs tracking-widest uppercase">Services</button></li>
                <li><button onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} className="text-text-light/40 hover:text-gold transition-all text-xs tracking-widest uppercase">Portfolio</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 md:mb-10">Global HQ</h4>
              <ul className="space-y-4 md:space-y-6">
                <li className="text-text-light/40 text-xs tracking-widest uppercase truncate">noorwebstodio@gmail.com</li>
                <li className="text-text-light/40 text-xs tracking-widest uppercase">+92 325 7591824</li>
                <li className="text-text-light/40 text-xs tracking-widest uppercase">Digital Presence Worldwide</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <p className="text-text-light/10 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} NoorWeb Studio. Neural Growth Protocols Active.</p>
            <div className="flex space-x-10">
              <button onClick={() => { setCurrentView('terms'); window.scrollTo(0, 0); }} className="text-text-light/10 hover:text-gold text-[10px] uppercase tracking-[0.2em] transition-colors">Privacy Protocol</button>
              <button onClick={() => { setCurrentView('terms'); window.scrollTo(0, 0); }} className="text-text-light/10 hover:text-gold text-[10px] uppercase tracking-[0.2em] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
