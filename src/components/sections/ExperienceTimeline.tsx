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
    period: '2020 — obecnie',
    position: 'Dyrektor Operacyjny',
    company: 'Nazwa Firmy',
    description:
      'Odpowiedzialność za operacje i rozwój struktur w organizacji wielooddziałowej.',
    responsibilities: [
      'Planowanie działań operacyjnych',
      'Zarządzanie budżetem operacyjnym',
      'Rozwój procesów organizacyjnych',
      'Budowanie zespołów menedżerskich',
      'Nadzór nad projektami rozwojowymi',
    ],
  },
  {
    id: '2',
    period: '2015 — 2020',
    position: 'Dyrektor Zarządzający',
    company: 'Nazwa Firmy',
    description:
      'Rozwój operacji regionalnych i wdrażanie rozwiązań wspierających organizację.',
    responsibilities: [
      'Zarządzanie strukturą operacyjną',
      'Optymalizacja kosztów',
      'Rozwój modeli organizacyjnych',
      'Koordynacja działań zespołów',
      'Współpraca z partnerami biznesowymi',
    ],
  },
  {
    id: '3',
    period: '2010 — 2015',
    position: 'Kierownik Operacyjny',
    company: 'Nazwa Firmy',
    description:
      'Nadzór nad procesami operacyjnymi i organizacją pracy zespołów.',
    responsibilities: [
      'Zarządzanie operacjami',
      'Koordynacja procesów logistycznych',
      'Wdrażanie standardów jakości',
      'Rozwój kompetencji zespołów',
      'Raportowanie wyników operacyjnych',
    ],
  },
  {
    id: '4',
    period: '2005 — 2010',
    position: 'Menedżer ds. Operacji',
    company: 'Nazwa Firmy',
    description:
      'Koordynacja działań operacyjnych i wsparcie procesów organizacyjnych.',
    responsibilities: [
      'Zarządzanie procesami operacyjnymi',
      'Koordynacja projektów usprawniających',
      'Monitoring efektywności działań',
      'Współpraca między działami',
      'Rozwój procedur operacyjnych',
    ],
  },
  {
    id: '5',
    period: '1999 — 2005',
    position: 'Specjalista ds. Operacyjnych',
    company: 'Nazwa Firmy',
    description:
      'Wsparcie procesów organizacyjnych i udział w działaniach operacyjnych.',
    responsibilities: [
      'Wsparcie działań operacyjnych',
      'Przygotowanie analiz i raportów',
      'Udział w projektach usprawniających',
      'Tworzenie dokumentacji',
      'Wsparcie wdrożeń procesowych',
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
      className="py-24 md:py-32 bg-[#f3f0eb]"
    >
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-[#6a6a6a] font-medium">
              Doświadczenie operacyjne
            </span>

            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#1f1f1f]">
            Doświadczenie zawodowe
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#d5d0c7]" />

          <div className="space-y-0">

            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative pl-12 pb-12 last:pb-0"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px]">
                  <div className="w-full h-full rounded-full bg-[#8a8580]" />
                </div>

                {/* Card */}
                <div className="border border-[#d5d0c7] bg-white transition-all duration-300 hover:border-[#c5c1ba]">

                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={expandedId === item.id}
                    className="w-full px-6 py-6 text-left"
                  >

                    <div className="space-y-4">

                      {/* Period */}
                      <div className="flex items-center gap-3">

                        <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                          {item.period}
                        </span>

                        <div className="flex-1 h-px bg-[#ece8e1]" />

                      </div>

                      {/* Position */}
                      <div className="space-y-1">

                        <h3 className="text-2xl md:text-3xl font-display font-normal text-[#1f1f1f]">
                          {item.position}
                        </h3>

                        <p className="text-sm text-[#6a6a6a]">
                          {item.company}
                        </p>

                      </div>

                      {/* Description */}
                      <p className="text-[#4f4f4f] leading-relaxed max-w-3xl">
                        {item.description}
                      </p>

                      {/* Toggle */}
                      <div className="flex items-center gap-2 pt-2 text-xs text-[#8a8580]">

                        <span className="uppercase tracking-wide font-medium">
                          {expandedId === item.id
                            ? 'Zwiń szczegóły'
                            : 'Zobacz szczegóły'}
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

                  {/* Expandable content */}
                  <AnimatePresence>

                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >

                        <div className="px-6 pb-6 pt-4 border-t border-[#ece8e1]">

                          <h4 className="text-xs uppercase tracking-wide text-[#6a6a6a] font-medium mb-5">
                            Zakres odpowiedzialności
                          </h4>

                          <ul className="space-y-3">

                            {item.responsibilities.map(
                              (responsibility, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.25,
                                    delay: idx * 0.04,
                                  }}
                                  className="flex items-start gap-3 text-[#4f4f4f]"
                                >

                                  <span className="mt-1.5 text-[#8a8580]">
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
