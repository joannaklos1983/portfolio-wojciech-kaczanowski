'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';

interface TimelineItem {
  id: string;
  period: string;
  position: string;
  company: string;
  description: string;
  responsibilities: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    period: '2016 — obecnie',
    position: 'Dyrektor oddziału',
    company: 'Grupa Kapitałowa SPECJAŁ',
    description:
      'Odpowiedzialność za zarządzanie oddziałem, organizację pracy zespołów oraz realizację celów sprzedażowych i operacyjnych w środowisku FMCG.',
    responsibilities: [
      'Zarządzanie funkcjonowaniem oddziału',
      'Organizacja pracy zespołów',
      'Koordynacja działań operacyjnych',
      'Realizacja celów sprzedażowych',
      'Współpraca między działami',
      'Usprawnianie organizacji pracy',
    ],
  },
  {
    id: '2',
    period: '2014 — 2016',
    position: 'Dyrektor oddziału',
    company: 'Bć-Pol S.A.',
    description:
      'Koordynacja działań operacyjnych oraz organizacja pracy oddziału w obszarze sprzedaży i zarządzania zespołami.',
    responsibilities: [
      'Koordynacja działań operacyjnych',
      'Zarządzanie zespołami',
      'Nadzór nad funkcjonowaniem oddziału',
      'Realizacja działań sprzedażowych',
      'Organizacja procesów',
    ],
  },
  {
    id: '3',
    period: '2013 — 2014',
    position: 'Regionalny kierownik sprzedaży',
    company: 'Uroda Polska',
    description:
      'Rozwój sprzedaży regionalnej oraz koordynacja działań handlowych i zespołów sprzedażowych.',
    responsibilities: [
      'Rozwój sprzedaży regionalnej',
      'Koordynacja zespołów handlowych',
      'Realizacja celów sprzedażowych',
      'Organizacja działań handlowych',
      'Budowanie relacji biznesowych',
    ],
  },
  {
    id: '4',
    period: '1999 — 2012',
    position: 'Regionalny kierownik sprzedaży',
    company: 'PepsiCo',
    description:
      'Rozwój kariery od stanowisk operacyjnych do zarządzania sprzedażą regionalną w strukturach międzynarodowej organizacji FMCG.',
    responsibilities: [
      'Zarządzanie sprzedażą regionalną',
      'Koordynacja działań operacyjnych',
      'Organizacja transportu i logistyki',
      'Zarządzanie zespołami',
      'Realizacja celów biznesowych',
    ],
  },
];

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="doswiadczenie"
      className="bg-[#f3f0eb] py-12 md:py-20"
    >
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >

          <div className="mb-3 md:mb-4 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-[#6a6a6a]">
              Doświadczenie operacyjne
            </span>
            <div className="h-px flex-1 bg-[#d5d0c7]" />
          </div>

          <h2 className="mb-6 md:mb-8 font-display text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a1a1a]">
            Doświadczenie zawodowe
          </h2>

          {/* Metryki */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-[#e7e3dc] pt-5 md:pt-6 pb-2 md:grid-cols-4">

            <div className="space-y-1">
              <div className="font-display text-3xl md:text-4xl font-normal text-[#1a1a1a]">
                20+
              </div>
              <div className="text-xs md:text-sm text-[#6a6a6a]">
                Lat w branży FMCG
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-3xl md:text-4xl font-normal text-[#1a1a1a]">
                100+
              </div>
              <div className="text-xs md:text-sm text-[#6a6a6a]">
                Osób w zespołach
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-3xl md:text-4xl font-normal text-[#1a1a1a]">
                4
              </div>
              <div className="text-xs md:text-sm text-[#6a6a6a]">
                Organizacje różnej skali
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-3xl md:text-4xl font-normal text-[#1a1a1a]">
                13
              </div>
              <div className="text-xs md:text-sm text-[#6a6a6a]">
                Lat w PepsiCo
              </div>
            </div>

          </div>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute bottom-0 left-0 top-0 w-px bg-[#d5d0c7]" />

          <div className="space-y-0">

            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-6 md:pb-8 pl-8 md:pl-12 last:pb-0"
              >

                {/* Punkt timeline */}
                <div className="absolute left-0 top-2 h-2 w-2 -translate-x-[3.5px]">
                  <div className="h-full w-full rounded-full bg-[#8a8580]" />
                </div>

                {/* Card */}
                <div className="border border-[#d5d0c7] bg-[#f5f2ec] transition-all duration-300 hover:border-[#c5c1ba]">

                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 md:px-6 py-4 text-left"
                  >

                    <div className="space-y-2.5 md:space-y-3">

                      {/* Okres */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-[#6a6a6a]">
                          {item.period}
                        </span>
                        <div className="h-px flex-1 bg-[#e7e3dc]" />
                      </div>

                      {/* Stanowisko */}
                      <div className="space-y-1">
                        <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-normal text-[#1a1a1a]">
                          {item.position}
                        </h3>
                        <p className="text-sm text-[#6a6a6a]">
                          {item.company}
                        </p>
                      </div>

                      {/* Opis */}
                      <p className="text-sm md:text-base leading-relaxed text-[#4a4a4a]">
                        {item.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 pt-1 text-xs text-[#8a8580]">
                        <span className="font-medium uppercase tracking-wide">
                          {expandedId === item.id
                            ? 'Zwiń'
                            : 'Zobacz szczegóły'}
                        </span>

                        <svg
                          className={`h-4 w-4 transition-transform duration-300 ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                    </div>

                  </button>

                  {/* Expanded */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >

                        <div className="border-t border-[#e7e3dc] px-5 md:px-6 pb-4 md:pb-5 pt-3">

                          <h4 className="mb-3 md:mb-4 text-xs font-medium uppercase tracking-wide text-[#6a6a6a]">
                            Kluczowe obszary
                          </h4>

                          <ul className="space-y-2.5 md:space-y-3">

                            {item.responsibilities.map(
                              (responsibility, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: idx * 0.05,
                                  }}
                                  className="flex items-start gap-3 text-sm md:text-base text-[#4a4a4a]"
                                >
                                  <span className="mt-1.5 flex-shrink-0 text-[#8a8580]">
                                    —
                                  </span>
                                  <span>{responsibility}</span>
                                </motion.li>
                              )
                            )}

                          </ul>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}
