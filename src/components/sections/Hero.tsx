'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden bg-[#f3f0eb]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-[#1a1a1a] leading-tight">
                Imię Nazwisko
              </h1>
              <p className="text-xl text-[#5a5a5a] font-light">
                Zarządzanie operacjami
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-base text-[#4a4a4a] leading-relaxed max-w-xl">
                Doświadczenie w zarządzaniu operacyjnym, 
                optymalizacji procesów i rozwoju struktur 
                organizacyjnych w firmach różnej skali.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
              <div className="text-sm text-[#6a6a6a]">Zarządzanie operacyjne</div>
              <div className="text-sm text-[#6a6a6a]">Rozwój organizacji</div>
              <div className="text-sm text-[#6a6a6a]">Optymalizacja procesów</div>
              <div className="text-sm text-[#6a6a6a]">Zarządzanie zespołami</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              
                href="#doswiadczenie"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#2a2a2a] text-[#f3f0eb] text-sm font-medium transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                Doświadczenie
              </a>

              
                href="#kontakt"
                className="inline-flex items-center justify-center px-7 py-3 border border-[#c5c1ba] text-[#4a4a4a] text-sm font-medium transition-colors duration-300 hover:border-[#8a8580] hover:bg-[#ece8e1]"
              >
                Kontakt
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              <div className="relative aspect-[3/4] bg-[#e7e3dc] border border-[#d5d0c7]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#d5d0c7] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#8a8580]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-xs text-[#8a8580]">Zdjęcie</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 bg-[#ece8e1] border border-[#d5d0c7] p-5">
                <div className="flex justify-between items-baseline py-2 border-b border-[#d5d0c7]">
                  <span className="text-xs text-[#6a6a6a] uppercase tracking-wide">Doświadczenie</span>
                  <span className="text-sm text-[#2a2a2a]">25+ lat</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-[#d5d0c7]">
                  <span className="text-xs text-[#6a6a6a] uppercase tracking-wide">Branże</span>
                  <span className="text-sm text-[#2a2a2a]">Wielobranżowy</span>
                </div>
                <div className="flex justify-between items-baseline py-2 border-b border-[#d5d0c7]">
                  <span className="text-xs text-[#6a6a6a] uppercase tracking-wide">Zakres</span>
                  <span className="text-sm text-[#2a2a2a]">PL i międzynarodowy</span>
                </div>
                <div className="flex justify-between items-baseline py-2">
                  <span className="text-xs text-[#6a6a6a] uppercase tracking-wide">Specjalizacja</span>
                  <span className="text-sm text-[#2a2a2a]">Operacje</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
