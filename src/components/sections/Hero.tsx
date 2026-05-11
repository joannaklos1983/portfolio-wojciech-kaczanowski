'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-32 md:py-40 lg:py-48 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-[#2a2a2a]/30" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#9d8b7a] font-medium">
                <span className="w-8 h-px bg-[#9d8b7a]/50" />
                Executive Leadership Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="max-w-4xl mb-10"
            >
              Driving Sustainable
              <br />
              Business Growth Through
              <br />
              Strategic Leadership
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#b8b6b3] font-light leading-relaxed max-w-2xl mb-14"
            >
              Executive leader with over two decades of experience in operational excellence,
              organizational transformation, and scalable business development across international markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="border-l border-[#8b7355]/40 pl-6 mb-16"
            >
              <p className="text-[#9d8b7a] italic text-lg leading-relaxed max-w-xl">
                “Long-term success is built through disciplined execution,
                strategic thinking, and the ability to lead organizations through change.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-9 py-4 bg-[#e8e6e3] text-[#1a1a1a] text-sm tracking-wide uppercase font-medium transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                View Experience
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-9 py-4 border border-[#5a5856] text-[#e8e6e3] text-sm tracking-wide uppercase font-medium transition-all duration-300 hover:border-[#9d8b7a] hover:text-white"
              >
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-20 pt-12 border-t border-[#3a3838]"
            >
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                <div>
                  <div className="text-4xl md:text-5xl font-display text-[#e8e6e3] mb-2">20+</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6a6764]">
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-display text-[#e8e6e3] mb-2">12</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6a6764]">
                    Global Markets
                  </div>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-display text-[#e8e6e3] mb-2">$1B+</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6a6764]">
                    Business Impact
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#5a5856]/30" />

              <div className="relative aspect-[3/4] overflow-hidden bg-[#2a2a2a]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full border border-[#5a5856]/30 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-14 h-14 text-[#6a6764]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.3}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>

                    <p className="text-[#6a6764] text-sm uppercase tracking-[0.2em]">
                      Executive Portrait
                    </p>
                  </div>
                </div>

                {/*
                <Image
                  src="/images/executive.jpg"
                  alt="Executive Portrait"
                  fill
                  priority
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
