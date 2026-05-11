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
    description: 'Nadzór nad operacjami w organizacji międzynarodowej. Zarządzanie zespołem 200+ osób w strukturze wielooddziałowej.',
    responsibilities: [
      'Planowanie i realizacja strategii operacyjnej',
      'Zarządzanie budżetem operacyjnym',
      'Rozwój i optymalizacja procesów biznesowych',
      'Budowanie i rozwój zespołów menedżerskich',
      'Nadzór nad projektami transformacji organizacyjnej',
    ],
  },
  {
    id: '2',
    period: '2015 — 2020',
    position: 'Dyrektor Zarządzający',
    company: 'Nazwa Firmy',
    description: 'Rozwój i skalowanie operacji regionalnych. Wdrożenie systemów wspierających wzrost organizacji.',
    responsibilities: [
      'Kierowanie zespołem 150+ osób',
      'Wprowadzenie nowych modeli operacyjnych',
      'Optymalizacja kosztów i procesów',
      'Rozwój struktury organizacyjnej',
      'Budowanie relacji z kluczowymi partnerami',
    ],
  },
  {
    id: '3',
    period: '2010 — 2015',
    position: 'Kierownik Operacyjny',
    company: 'Nazwa Firmy',
    description: 'Zarządzanie operacjami w środowisku produkcyjno-logistycznym. Optymalizacja procesów i rozwój zespołów.',
    responsibilities: [
      'Nadzór nad operacjami produkcyjnymi',
      'Zarządzanie łańcuchem dostaw',
      'Implementacja systemów jakości',
      'Rozwój kompetencji zespołów',
      'Raportowanie wyników operacyjnych',
    ],
  },
  {
    id: '4',
    period: '2005 — 2010',
    position: 'Menedżer ds. Operacji',
    company: 'Nazwa Firmy',
    description: 'Koordynacja operacji i procesów biznesowych. Nadzór nad zespołami operacyjnymi.',
    responsibilities: [
      'Koordynacja działań operacyjnych',
      'Zarządzanie projektami usprawnieniowymi',
      'Monitoring wskaźników efektywności',
      'Współpraca z działami wsparcia',
      'Rozwój procedur operacyjnych',
    ],
  },
  {
    id: '5',
    period: '1999 — 2005',
    position: 'Specjalista ds. Operacyjnych',
    company: 'Nazwa Firmy',
    description: 'Wsparcie operacyjne i zarządzanie projektami. Rozwój kompetencji w zakresie procesów biznesowych.',
    responsibilities: [
      'Wsparcie procesów operacyjnych',
      'Przygotowanie raportów i analiz',
      'Udział w projektach usprawnieniowych',
      'Dokumentacja procesów',
      'Szkolenie pracowników',
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
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs text-[#6a6a6a] font-medium tracking-wider uppercase">
              Ścieżka kariery
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#1a1a1a]">
            Doświadczenie zawodowe
          </h2>
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
                  <div className="absolute inset-0 bg-[#8a8580] rounded-full animate-ping opacity-20" />
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
                            Zakres odpowiedzialności
                          </h4>
                          <ul className="space-y-3">
                            {item.responsibilities.map((responsibility, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity:
