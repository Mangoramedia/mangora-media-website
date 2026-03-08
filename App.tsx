import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-orange selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">MANGORA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Clients", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/60 hover:text-brand-orange transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2.5 bg-brand-orange text-black text-sm font-bold rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/5 p-6 flex flex-col gap-4"
          >
            {["Services", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-white/60 hover:text-brand-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-brand-orange text-black font-bold rounded-xl mt-4">
              Let's Talk
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-brand-orange/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-brand-orange/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                  </span>
                  Positioning Brands for the Future
                </div>
                
                <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tight mb-8">
                  WE BUILD <br />
                  <span className="text-brand-orange">DIGITAL</span> <br />
                  LEGACIES.
                </h1>
                
                <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                  Mangora Media is a creative powerhouse dedicated to helping brands carve their unique space in the digital landscape through strategic design and bold storytelling.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="group w-full sm:w-auto px-8 py-4 bg-brand-orange text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white transition-all hover:scale-105">
                    Start Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="#clients" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all text-center">
                    View Our Work
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-square"
              >
                {/* Abstract Shape 1 */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-transparent opacity-20 rounded-3xl rotate-12 blur-2xl animate-pulse" />
                
                {/* Main Visual Element */}
                <div className="relative w-full h-full border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-brand-orange/5" />
                  
                  {/* Animated Rings and Particles */}
                  <div className="relative w-72 h-72">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-brand-orange/30 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-6 border border-white/10 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-12 border-2 border-brand-orange/10 rounded-full"
                    />
                    
                    <div className="absolute inset-16 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(242,125,38,0.5)] z-10">
                      <div className="w-16 h-16 bg-black rounded-xl rotate-45 transform group-hover:rotate-90 transition-transform duration-700 flex items-center justify-center">
                        <div className="w-6 h-6 bg-brand-orange rounded-sm" />
                      </div>
                    </div>

                    {/* Floating elements to fill space */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -20, 0],
                          x: [0, i % 2 === 0 ? 10 : -10, 0],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ 
                          duration: 3 + i, 
                          repeat: Infinity, 
                          delay: i * 0.5 
                        }}
                        className="absolute w-2 h-2 bg-brand-orange rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Floating Cards */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 p-5 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl"
                  >
                    <div className="w-10 h-1.5 bg-brand-orange rounded-full mb-3" />
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 left-8 p-5 bg-black/80 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl"
                  >
                    <div className="flex gap-1.5 mb-3">
                      {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-brand-orange" />)}
                    </div>
                    <div className="w-20 h-1 bg-white/20 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Clients Section */}
      <section id="clients" className="py-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange mb-4">Featured Clients</h2>
            <h3 className="font-display text-4xl md:text-5xl font-black">THE BRANDS WE'VE <span className="text-brand-orange">EMPOWERED</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Melos Cafe", type: "Hospitality & Lifestyle", desc: "Redefining the modern cafe experience through minimalist digital identity." },
              { name: "Shield Burger", type: "Food & Beverage", desc: "Building a bold, high-energy brand that dominates the local market." }
            ].map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative p-12 bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-brand-orange/50 transition-all"
              >
                <div className="relative z-10">
                  <div className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-4">{client.type}</div>
                  <h4 className="font-display text-4xl md:text-5xl font-black mb-6 group-hover:translate-x-2 transition-transform">{client.name}</h4>
                  <p className="text-white/40 text-lg leading-relaxed max-w-md">{client.desc}</p>
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-20 transition-opacity">
                  <div className="text-8xl font-display font-black">0{idx + 1}</div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="relative py-32 overflow-hidden">
        {/* Background Placeholder for Video/Image */}
        <div className="absolute inset-0 -z-10 bg-[#080808]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F27D26_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange mb-6">
                The Agency
              </h2>
              <h3 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
                Where Creativity <br />
                Meets Strategy.
              </h3>
              <div className="w-20 h-1 bg-brand-orange mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                At Mangora Media, we believe powerful brands are built at the intersection of creativity, strategy, and innovation. Our agency exists to help ambitious businesses stand out in a crowded digital world.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                We collaborate with forward-thinking brands to transform ideas into compelling visual identities, high-impact campaigns, and meaningful digital experiences. Every project we take on is driven by insight, crafted with precision, and designed to leave a lasting impression.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                From bold branding to performance-driven marketing, our mission is simple — create work that doesn’t just attract attention, but builds influence and long-term growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-8">
                <div>
                  <h4 className="font-display font-bold text-lg mb-3">Our Vision</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    To become a leading creative partner for brands that aim to challenge conventions and shape the future of their industries.
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-3">Our Mission</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    To empower businesses through strategic branding, powerful storytelling, and performance-driven marketing that turns ideas into measurable success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange mb-6">Our Expertise</h2>
              <h3 className="font-display text-5xl md:text-7xl font-black leading-none uppercase">
                FULL-STACK <br />
                <span className="text-brand-orange">CREATIVITY</span>
              </h3>
            </div>
            <p className="text-white/40 max-w-sm text-right hidden md:block">
              We provide a holistic approach to brand growth, combining artistic vision with technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Branding", 
                desc: "We define the visual and verbal language that makes your brand unmistakable.",
                items: ["Visual Strategy", "Logo Design", "Typography", "Color Theory"]
              },
              { 
                title: "Content Production", 
                desc: "High-end visual storytelling that captures attention and drives engagement.",
                items: ["Video Production", "Photography", "Motion Graphics", "Copywriting"]
              },
              { 
                title: "Influencer Marketing", 
                desc: "Connecting your brand with the right voices to reach your target audience authentically.",
                items: ["Talent Sourcing", "Campaign Strategy", "Management", "ROI Tracking"]
              },
              { 
                title: "Performance Marketing", 
                desc: "Data-driven campaigns designed to deliver measurable results and growth.",
                items: ["Paid Social", "Search Ads", "Conversion Optimization", "Analytics"]
              },
              { 
                title: "Market Analysis", 
                desc: "Deep dives into industry trends and competitor landscapes to find your edge.",
                items: ["Consumer Insights", "Trend Forecasting", "Gap Analysis", "Strategy"]
              },
              { 
                title: "Digital Experience", 
                desc: "Crafting seamless interactions across all digital touchpoints.",
                items: ["UI/UX Design", "Web Development", "App Design", "E-commerce"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-brand-orange/50 transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h4 className="font-display font-bold text-2xl mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-orange rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different Section - The Mangora Edge */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full border border-brand-orange/30 text-brand-orange text-[10px] font-bold uppercase tracking-[0.5em] mb-6"
            >
              The Mangora Edge
            </motion.div>
            <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
              WHY WE ARE <span className="text-brand-orange">DIFFERENT</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Most agencies build for today. We build for the legacy you haven't even imagined yet.
            </p>
          </div>

          {/* Unique Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Strategic Positioning */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:border-brand-orange/50"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 border-2 border-brand-orange rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite]">
                  <div className="w-2 h-2 bg-brand-orange rounded-full" />
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors">
                  <span className="text-brand-orange group-hover:text-black font-black text-xl">01</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Strategic Positioning</h3>
                <p className="text-white/50 leading-relaxed">
                  We don't just make things look pretty. We analyze market gaps to position your brand where the competition isn't looking.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-all" />
            </motion.div>

            {/* Feature 2: Future-Proofing (The Centerpiece) */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-10 bg-brand-orange border border-brand-orange rounded-[2.5rem] overflow-hidden text-black shadow-[0_0_50px_rgba(242,125,38,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-8">
                  <span className="text-brand-orange font-black text-xl">02</span>
                </div>
                <h3 className="font-display text-3xl font-black mb-4 uppercase italic">Future Proofing</h3>
                <p className="text-black/80 font-medium leading-relaxed text-lg">
                  Our designs are built on systems, not trends. We ensure your brand remains relevant 10 years from now, not just 10 months.
                </p>
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-orange bg-black flex items-center justify-center text-[10px] font-bold text-white">
                        M
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">The Mangora Standard</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Data-Driven Creativity */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative p-10 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all hover:border-brand-orange/50"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors">
                  <span className="text-brand-orange group-hover:text-black font-black text-xl">03</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">Data-Driven Design</h3>
                <p className="text-white/50 leading-relaxed">
                  Every pixel has a purpose. We use behavioral data to inform our creative choices, ensuring your brand converts as well as it looks.
                </p>
              </div>
              {/* Animated background lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#F27D26_10px,#F27D26_11px)]" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Interactive Element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-brand-orange/10 flex items-center justify-center relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-orange/20 rounded-full blur-xl"
                />
                <div className="w-10 h-10 bg-brand-orange rounded-full" />
              </div>
              <div>
                <h4 className="font-display text-2xl font-bold">Ready to stand out?</h4>
                <p className="text-white/40">Stop blending in with the noise.</p>
              </div>
            </div>
            <button className="group px-10 py-5 bg-white text-black font-black rounded-full hover:bg-brand-orange transition-all flex items-center gap-3">
              BOOK A STRATEGY CALL
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
      {/* Redesigned Premium Section */}
      <section className="relative py-40 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 text-[20rem] font-display font-black text-white/[0.02] leading-none select-none">
                EVO
              </div>
              <h2 className="font-serif italic text-6xl md:text-8xl leading-[1.1] text-white mb-8">
                We don't just <span className="text-brand-orange">design</span>. <br />
                We evolve.
              </h2>
              <p className="text-xl text-white/40 leading-relaxed max-w-lg">
                In a world that never stops moving, standing still is the greatest risk. We help brands adapt, grow, and lead through intentional evolution.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Innovation", delay: 0 },
                { label: "Strategy", delay: 0.1 },
                { label: "Craft", delay: 0.2 },
                { label: "Legacy", delay: 0.3 }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="aspect-square border border-white/10 rounded-3xl flex items-center justify-center group hover:bg-brand-orange transition-all duration-500"
                >
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-black group-hover:scale-110 transition-all">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 border-t border-white/5 py-10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="text-[10vw] font-display font-black uppercase"
          >
            Mangora Media • Strategic Design • Digital Legacy • Creative Powerhouse • 
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">MANGORA</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                A creative powerhouse dedicated to helping brands carve their unique space in the digital landscape through strategic design and bold storytelling.
              </p>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "LinkedIn", "Behance"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-1.5 h-1.5 bg-current rounded-full" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["Services", "Work", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-brand-orange transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-8">Contact</h4>
              <ul className="space-y-4">
                <li className="text-white/40">mangoramedia@gmail.com</li>
                <li className="text-white/40">+91 7619491271</li>
                <li className="text-white/40">Mysore, India</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} Mangora Media. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
