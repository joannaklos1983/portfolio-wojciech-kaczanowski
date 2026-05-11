'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#f3f0eb] py-20 md:py-24">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* Lewa kolumna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-7"
          >

            {/* Nagłówek */}
            <div className="space-y-3">

              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-medium text-[#6a6a6a]">
                  FMCG • Sprzedaż • Zarządzanie oddziałami
                </span>

                <div className="h-px flex-1 bg-[#d5d0c7]" />
              </div>

              <h1 className="font-display text-4xl font-normal leading-tight text-[#1f1f1f] md:text-5xl lg:text-6xl">
                Wojciech Kaczanowski
              </h1>

              <p className="text-lg font-light text-[#5c5c5c] md:text-xl">
                Zarządzanie sprzedażą i organizacją pracy zespołów
              </p>

            </div>

            {/* Opis */}
            <div>
              <p className="max-w-xl text-base leading-relaxed text-[#4f4f4f]">
                Doświadczenie w zarządzaniu oddziałami, organizacji pracy zespołów oraz realizacji celów sprzedażowych w środowisku FMCG.
              </p>
            </div>

            {/* Kompetencje */}
            <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8a8580]" />

                <span className="text-sm text-[#666666]">
                  Zarządzanie oddziałami
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8a8580]" />

                <span className="text-sm text-[#666666]">
                  Koordynacja działań
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8a8580]" />

                <span className="text-sm text-[#666666]">
                  Organizacja pracy zespołów
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8a8580]" />

                <span className="text-sm text-[#666666]">
                  Sprzedaż i realizacja celów
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">

              <a
                href="#doswiadczenie"
                className="inline-flex items-center justify-center bg-[#2a2a2a] px-7 py-3 text-sm font-medium text-[#f3f0eb] transition-colors duration-300 hover:bg-[#1f1f1f]"
              >
                Doświadczenie zawodowe
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center border border-[#c5c1ba] px-7 py-3 text-sm font-medium text-[#4f4f4f] transition-colors duration-300 hover:border-[#8a8580] hover:bg-[#ece8e1]"
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

            <div className="space-y-5">

              {/* Zdjęcie */}
              <div className="relative aspect-[3/4] overflow-hidden border border-[#d5d0c7] bg-[#ece8e1]">
                <Image
                  src="/images/wojciech_kaczanowski.png"
                  alt="Wojciech Kaczanowski"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Informacje */}
              <div className="border border-[#d5d0c7] bg-[#ece8e1] p-5">

                <div className="space-y-4">

                  <div className="flex items-baseline justify-between border-b border-[#d5d0c7] pb-3">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Doświadczenie
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      25+ lat
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-[#d5d0c7] pb-3">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Zakres działań
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      Operacje i sprzedaż
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-[#d5d0c7] pb-3">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Środowisko pracy
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      Organizacje wielooddziałowe
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      Zespoły
                    </span>

                    <span className="text-sm text-[#2a2a2a]">
                      100+ osób
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
