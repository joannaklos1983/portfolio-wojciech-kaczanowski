'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden bg-[#2b2b2b]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start lg:items-center">
          
          {/* Kolumna treści */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Nazwa i rola */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-[#e8e6e3] leading-tight">
                Imię Nazwisko
              </h1>
              <p className="text-xl md:text-2xl text-[#a8a6a3] font-light">
                Zarządzanie operacjami i strukturami organizacyjnymi
              </p>
            </div>

            {/* Obszary kompetencji */}
            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <p className="text-base text-[#b8b6b3] leading-relaxed">
                  Wieloletnie doświadczenie w zarządzaniu operacyjnym, 
                  optymalizacji procesów biznesowych i budowaniu 
                  efektywnych struktur organizacyjnych w firmach 
                  o różnej skali działania.
                </p>
              </div>

              {/* Kluczowe obszary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#8b7355] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#9a9896]">Zarządzanie operacyjne</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#8b7355] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#9a9896]">Rozwój organizacji</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#8b7355] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#9a9896]">Optymalizacja procesów</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#8b7355] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#9a9896]">Zarządzanie zespołami</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              
                href="#doswiadczenie"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3a3838] text-[#e8e6e3] text-sm font-medium transition-colors duration-300 hover:bg-[#454343]"
              >
                Doświadczenie zawodowe
              </a>

              
                href="#kompetencje"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#3a3838] text-[#b8b6b3] text-sm font-medium transition-colors duration-300 hover:border-[#4a4848] hover:text-[#e8e6e3]"
              >
                Zakres odpowiedzialności
              </a>
            </div>
          </motion.div>

          {/* Kolumna profilu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            {/* Kontener profilu */}
            <div className="space-y-8">
              {/* Zdjęcie */}
              <div className="relative">
                <div className="relative aspect-[3/4] bg-[#323232] border border-[#3a3838]">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#3a3838] flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#5a5856]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <p className="text-xs text-[#6a6764]">Zdjęcie profilowe</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kluczowe informacje */}
              <div className="space-y-4 bg-[#323232] border border-[#3a3838] p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline pb-3 border-b border-[#3a3838]">
                    <span className="text-xs text-[#7a7876] tracking-wide uppercase">Doświadczenie</span>
                    <span className="text-sm text-[#b8b6b3]">25+ lat</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-[#3a3838]">
                    <span className="text-xs text-[#7a7876] tracking-wide uppercase">Branże</span>
                    <span className="text-sm text-[#b8b6b3]">Wielobranżowy</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-3 border-b border-[#3a3838]">
                    <span className="text-xs text-[#7a7876] tracking-wide uppercase">Zakres</span>
                    <span className="text-sm text-[#b8b6b3]">Polska i międzynarodowy</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-[#7a7876] tracking-wide uppercase">Specjalizacja</span>
                    <span className="text-sm text-[#b8b6b3]">Operacje</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
