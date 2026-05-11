'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#f5f2ec] py-16 md:py-20">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

          {/* LEWA KOLUMNA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7 lg:col-span-7"
          >

            {/* TOP LABEL */}
            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <span className="text-[13px] text-[#6d6965]">
                  FMCG • Sprzedaż • Zarządzanie oddziałami
                </span>

                <div className="h-px flex-1 bg-[#d8d2ca]" />
              </div>

              {/* H1 */}
              <h1 className="font-display text-5xl leading-[0.95] text-[#1f1f1f] md:text-6xl lg:text-[72px]">
                Wojciech Kaczanowski
              </h1>

              {/* SUBHEADLINE */}
              <p className="text-lg font-normal text-[#5d5955] md:text-xl">
                Zarządzanie sprzedażą i organizacją pracy zespołów
              </p>

            </div>

            {/* OPIS */}
            <div>
              <p className="max-w-xl text-[16px] leading-relaxed text-[#4f4b47]">
                Doświadczenie w zarządzaniu oddziałami, organizacji pracy zespołów
                oraz realizacji celów sprzedażowych w środowisku FMCG.
              </p>
            </div>

            {/* KOMPETENCJE */}
            <div className="grid max-w-2xl grid-cols-1 gap-x-10 gap-y-3 pt-1 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8c8781]" />

                <span className="text-sm text-[#66625e]">
                  Zarządzanie oddziałami
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8c8781]" />

                <span className="text-sm text-[#66625e]">
                  Koordynacja działań
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8c8781]" />

                <span className="text-sm text-[#66625e]">
                  Organizacja pracy zespołów
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8c8781]" />

                <span className="text-sm text-[#66625e]">
                  Sprzedaż i realizacja celów
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">

              <a
                href="#doswiadczenie"
                className="inline-flex items-center justify-center bg-[#232323] px-7 py-3 text-sm text-[#f5f2ec] transition-all duration-300 hover:bg-[#161616]"
              >
                Doświadczenie zawodowe
              </a>

              <a
                href="#kontakt"
                className="inline-flex items-center justify-center border border-[#cec7be] px-7 py-3 text-sm text-[#4c4945] transition-all duration-300 hover:border-[#aaa29a] hover:bg-[#ece7e0]"
              >
                Kontakt
              </a>

            </div>

          </motion.div>

          {/* PRAWA KOLUMNA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >

            <div className="space-y-5">

              {/* ZDJĘCIE */}
              <div className="relative aspect-[3/4] overflow-hidden border border-[#d7d1c8] bg-[#ece7e0]">
                <Image
                  src="/images/wojciech_kaczanowski.png"
                  alt="Wojciech Kaczanowski"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* INFO CARD */}
              <div className="border border-[#d7d1c8] bg-[#efeae3] p-5">

                <div className="space-y-4">

                  <div className="flex items-center justify-between border-b border-[#d8d2ca] pb-3">
                    <span className="text-[10px] tracking-[0.08em] text-[#7b766f]">
                      DOŚWIADCZENIE
                    </span>

                    <span className="text-sm text-[#242424]">
                      25+ lat
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#d8d2ca] pb-3">
                    <span className="text-[10px] tracking-[0.08em] text-[#7b766f]">
                      ZAKRES DZIAŁAŃ
                    </span>

                    <span className="text-sm text-[#242424]">
                      Operacje i sprzedaż
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#d8d2ca] pb-3">
                    <span className="text-[10px] tracking-[0.08em] text-[#7b766f]">
                      ŚRODOWISKO PRACY
                    </span>

                    <span className="text-sm text-[#242424]">
                      Organizacje wielooddziałowe
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.08em] text-[#7b766f]">
                      ZESPOŁY
                    </span>

                    <span className="text-sm text-[#242424]">
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
