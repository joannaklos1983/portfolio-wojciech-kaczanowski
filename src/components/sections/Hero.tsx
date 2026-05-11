'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#25282d] py-24 md:py-32">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* Lewa kolumna */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >

            {/* Top label */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs tracking-[0.2em] uppercase text-[#8c9199] font-medium">
               Skuteczność • Odpowiedzialność • Rozwój organizacji
              </span>

              <div className="h-px flex-1 bg-[#3a3f46]" />
            </div>

            {/* Headline */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-display font-normal text-[#f1efec] max-w-4xl">
                Doświadczenie w zarządzaniu operacjami i rozwoju struktur organizacyjnych
              </h1>

              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#b2b0ad]">
                Wieloletnie doświadczenie w zarządzaniu operacyjnym,
                rozwijaniu zespołów oraz usprawnianiu procesów wspierających
                efektywność organizacji i realizację celów biznesowych.
              </p>
            </div>

            {/* Kompetencje */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 mt-14">

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6f7782] mt-2.5 flex-shrink-0" />
                <span className="text-sm text-[#a4a2a0]">
                  Zarządzanie operacyjne
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6f7782] mt-2.5 flex-shrink-0" />
                <span className="text-sm text-[#a4a2a0]">
                  Rozwój organizacji
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6f7782] mt-2.5 flex-shrink-0" />
                <span className="text-sm text-[#a4a2a0]">
                  Optymalizacja procesów
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6f7782] mt-2.5 flex-shrink-0" />
                <span className="text-sm text-[#a4a2a0]">
                  Zarządzanie zespołami
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-14">

              <a
                href="#doswiadczenie"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#343941] text-[#f1efec] text-sm font-medium transition-all duration-300 hover:bg-[#40464f]"
              >
                Doświadczenie zawodowe
              </a>

              <a
                href="#kompetencje"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#40454d] text-[#c4c1bd] text-sm font-medium transition-all duration-300 hover:border-[#545a63] hover:text-[#f1efec]"
              >
                Zakres odpowiedzialności
              </a>

            </div>
          </motion.div>

          {/* Prawa kolumna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >

            <div className="space-y-8">

              {/* Placeholder profile area */}
              <div className="relative overflow-hidden border border-[#3a3f46] bg-[#2d3137] aspect-[3/4]">

                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">

                    <div className="w-24 h-24 rounded-full border border-[#434850] bg-[#353a42] flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-[#70757d]"
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

                    <p className="text-xs tracking-wide uppercase text-[#6d7278]">
                      Zdjęcie profilowe
                    </p>

                  </div>
                </div>
              </div>

              {/* Summary card */}
              <div className="border border-[#3a3f46] bg-[#2d3137] p-7">

                <div className="space-y-5">

                  <div className="flex items-center justify-between pb-4 border-b border-[#3a3f46]">
                    <span className="text-xs uppercase tracking-wide text-[#7d8288]">
                      Doświadczenie
                    </span>

                    <span className="text-sm text-[#d0cdca]">
                      25+ lat
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-[#3a3f46]">
                    <span className="text-xs uppercase tracking-wide text-[#7d8288]">
                      Zakres działań
                    </span>

                    <span className="text-sm text-[#d0cdca]">
                      Operacje i rozwój
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-[#3a3f46]">
                    <span className="text-xs uppercase tracking-wide text-[#7d8288]">
                      Środowisko pracy
                    </span>

                    <span className="text-sm text-[#d0cdca]">
                      Organizacje wielooddziałowe
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-[#7d8288]">
                      Specjalizacja
                    </span>

                    <span className="text-sm text-[#d0cdca]">
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
