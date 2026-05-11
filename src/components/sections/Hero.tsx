'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f3f0eb] py-24 md:py-32">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Lewa kolumna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-10"
          >

            {/* Nagłówek */}
            <div className="space-y-3">

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-[#6a6a6a] font-medium">
                  Zarządzanie operacyjne • Organizacja pracy • Rozwój firmy
                </span>

                <div className="h-px flex-1 bg-[#d5d0c7]" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-[#1f1f1f] leading-tight">
                Wojciech Kaczanowski
              </h1>

              <p className="text-xl text-[#5c5c5c] font-light">
                Doświadczenie w zarządzaniu operacjami i rozwoju organizacji
              </p>

            </div>

            {/* Opis */}
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-[#4f4f4f] max-w-xl">
                Wieloletnie doświadczenie w zarządzaniu operacyjnym,
                organizacji pracy zespołów oraz usprawnianiu procesów
                wspierających efektywność działania firmy.
              </p>
            </div>

            {/* Kompetencje */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl">

              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a8580]" />
                <span className="text-sm text-[#666666]">
                  Zarządzanie operacyjne
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a8580]" />
                <span className="text-sm text-[#666666]">
                  Rozwój organizacji
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a8580]" />
                <span className="text-sm text-[#666666]">
                  Optymalizacja procesów
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a8580]" />
                <span className="text-sm text-[#666666]">
                  Zarządzanie zespołami
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">

              <a
                href="#doswiadczenie"
                className="inline-flex items-center justify-center px-7 py-3 bg-[#2a2a2a] text-[#f3f0eb] text-sm font-medium transition-colors duration-300 hover:bg-[#1f1f1f]"
              >
                Doświadczenie zawodowe
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-7 py-3 border border-[#c5c1ba] text-[#4f4f4f] text-sm font-medium transition-colors duration-300 hover:border-[#8a8580] hover:bg-[#ece8e1]"
              >
                Kontakt
              </a>

            </div>

          </motion.div>

          {/* Prawa kolumna */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >

            <div className="space-y-6">

              {/* Placeholder zdjęcia */}
              <div className="relative aspect-[3/4] overflow-hidden border border-[#d5d0c7] bg-[#ece8e1]">

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center space-y-4">

                    <div className="w-20 h-20 mx-auto rounded-full bg-[#d5d0c7] flex items-center justify-center">

                      <svg
                        className="w-9 h-9 text-[#8a8580]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>

                    </div>

                    <p className="text-xs text-[#8a8580] uppercase tracking-wide">
                      Zdjęcie profilowe
                    </p>

                  </div>

                </div>

              </div>

              {/* Informacje */}
              <div className="border border-[#d5d0c7] bg-[#ece8e1] p-6">

                <div className="space-y-4">

                  <div className="flex justify-between items-baseline pb-3 border-b border-[#d5d0c7]">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Doświadczenie
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      25+ lat
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pb-3 border-b border-[#d5d0c7]">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Zakres działań
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      Operacje i rozwój
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pb-3 border-b border-[#d5d0c7]">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Środowisko pracy
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      Organizacje wielooddziałowe
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Specjalizacja
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      Zarządzanie operacyjne
                    </span>
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
