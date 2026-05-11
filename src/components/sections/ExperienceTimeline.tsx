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
    description: 'Odpowiedzialność za zarządzanie operacyjne oddziału, organizację pracy zespołów oraz realizację celów biznesowych w dynamicznym środowisku FMCG.',
    responsibilities: [
      'Zarządzanie operacyjne oddziału',
      'Organizacja pracy zespołów',
      'Realizacja celów sprzedażowych i operacyjnych',
      'Usprawnianie procesów',
      'Koordynacja działań',
      'Współpraca między działami',
    ],
  },
  {
    id: '2',
    period: '2014 — 2016',
    position: 'Dyrektor oddziału',
    company: 'Bć-Pol S.A.',
    description: 'Koordynacja działań operacyjnych oraz zarządzanie funkcjonowaniem oddziału w obszarze sprzedaży i organizacji pracy.',
    responsibilities: [
      'Organizacja działań operacyjnych',
      'Zarządzanie zespołami',
      'Realizacja działań sprzedażowych',
      'Koordynacja procesów',
      'Nadzór nad funkcjonowaniem oddziału',
    ],
  },
  {
    id: '3',
    period: '2013 — 2014',
    position: 'Regionalny kierownik sprzedaży',
    company: 'Uroda Polska',
    description: 'Rozwój sprzedaży regionalnej oraz koordynacja działań handlowych i zespołów sprzedażowych.',
    responsibilities: [
      'Sprzedaż regionalna',
      'Organizacja działań handlowych',
      'Koordynacja zespołów',
      'Realizacja celów sprzedażowych',
      'Rozwój relacji biznesowych',
    ],
  },
  {
    id: '4',
    period: '1999 — 2012',
    position: 'Regionalny kierownik sprzedaży',
    company: 'PepsiCo',
    description: 'Rozwój kariery od stanowisk operacyjnych do zarządzania sprzedażą regionalną w strukturach międzynarodowej organizacji FMCG.',
    responsibilities: [
      'Zarządzanie sprzedażą i operacjami',
      'Organizacja transportu i logistyki',
      'Koordynacja zespołów',
      'Rozwój struktur regionalnych',
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
    <section id="doswiadczenie" className="py-24 md:py-32 bg-[#f3f0eb]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-[#6a6a6a] font-medium tracking-wider uppercase">
              Doświadczenie operacyjne
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#1a1a1a] mb-12">
            Doświadczenie zawodowe
          </h2>

          {/* Metryki na górze */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 pb-4 border-t border-[#e7e3dc]">
            <div className="space-y-2">
              <div className="text-4xl font-display font-normal text-[#1a1a1a]">
                20+
              </div>
              <div className="text-sm text-[#6a6a6a]">
                Lat w branży FMCG
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-normal text-[#1a1a1a]">
                100+
              </div>
              <div className="text-sm text-[#6a6a6a]">
                Osób w zespołach
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-normal text-[#1a1a1a]">
                4
              </div>
              <div className="text-sm text-[#6a6a6a]">
                Organizacje różnej skali
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-normal text-[#1a1a1a]">
                13
              </div>
              <div className="text-sm text-[#6a6a6a]">
                Lat w PepsiCo
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#d5d0c7]" />

          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px]">
                  <div className="w-full h-full bg-[#8a8580] rounded-full" />
                </div>

                <div className="border border-[#d5d0c7] bg-[#ffffff] transition-all duration-300 hover:border-[#c5c1ba] hover:shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium tracking-wider text-[#6a6a6a] uppercase">
                          {item.period}
                        </span>
                        <div className="flex-1 h-px bg-[#e7e3dc]" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-display font-normal text-[#1a1a1a]">
                          {item.position}
                        </h3>
                        <p className="text-sm text-[#6a6a6a]">
                          {item.company}
                        </p>
                      </div>

                      <p className="text-[#4a4a4a] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-[#8a8580] pt-2">
                        <span className="font-medium tracking-wide uppercase">
                          {expandedId === item.id ? 'Zwiń' : 'Zobacz szczegóły'}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
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

                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 border-t border-[#e7e3dc]">
                          <h4 className="text-xs font-medium text-[#6a6a6a] mb-4 tracking-wide uppercase">
                            Kluczowe obszary
                          </h4>
                          <ul className="space-y-3">
                            {item.responsibilities.map((responsibility, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-start gap-3 text-[#4a4a4a]"
                              >
                                <span className="text-[#8a8580] mt-1.5 flex-shrink-0">—</span>
                                <span>{responsibility}</span>
                              </motion.li>
                            ))}
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
