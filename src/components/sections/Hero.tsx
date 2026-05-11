'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1eb] via-[#f5f1eb] to-[#e8dfd4] opacity-60" />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#e8dfd4]/40 to-transparent blur-3xl" />
      
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#c9bfb3]/20 to-transparent blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase text-[#8a8176] border border-[#c9bfb3]/30 rounded-full">
                Senior Executive Leader
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 text-[#1a1816]"
            >
              Transforming Vision
              <br />
              Into Strategic Impact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-[#2a2823] mb-12 max-w-2xl leading-relaxed"
            >
              25+ years of executive leadership driving operational excellence, 
              revenue growth, and organizational transformation across global markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16 pl-6 border-l-2 border-[#c9bfb3]"
            >
              <p className="text-lg text-[#8a8176] font-light italic max-w-xl">
                "Strategic execution is not about perfection—it's about disciplined 
                progress, aligned teams, and the courage to evolve."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-10 py-4 bg-[#2a2823] text-[#f5f1eb] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#1a1816] hover:shadow-lg hover:shadow-[#2a2823]/20"
              >
                <span>Connect With Me</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center px-10 py-4 border border-[#c9bfb3] text-[#2a2823] text-sm font-medium tracking-wide transition-all duration-300 hover:border-[#8a8176] hover:bg-[#e8dfd4]/30"
              >
                View Experience
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 pt-12 border-t border-[#c9bfb3]/30"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-display font-light text-[#1a1816] mb-1">25+</div>
                  <div className="text-xs text-[#8a8176] tracking-wide uppercase">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-light text-[#1a1816] mb-1">$2.4B+</div>
                  <div className="text-xs text-[#8a8176] tracking-wide uppercase">Revenue Impact</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-light text-[#1a1816] mb-1">15</div>
                  <div className="text-xs text-[#8a8176] tracking-wide uppercase">Markets</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#c9bfb3]/30 rounded-sm" />
              
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#e8dfd4] to-[#c9bfb3] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#f5f1eb]/80 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#8a8176]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#8a8176] font-light">Executive Portrait</p>
                  </div>
                </div>

                {/* <Image
                  src="/images/executive-portrait.jpg"
                  alt="Executive Portrait"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#8a8176]/20 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#experience" className="flex flex-col items-center gap-2 text-[#8a8176] hover:text-[#2a2823] transition-colors group">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
