'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

const competencies = [
  {
    id: '1',
    title: 'Zarządzanie operacyjne',
    description: 'Koordynacja działań wspierających sprawne funkcjonowanie zespołów i struktur organizacyjnych w środowisku wielooddziałowym.',
  },
  {
    id: '2',
    title: 'Organizacja procesów',
    description: 'Doświadczenie w organizacji pracy i usprawnianiu procesów wspierających realizację celów biznesowych.',
  },
  {
    id: '3',
    title: 'Zarządzanie zespołami',
    description: 'Wieloletnia praktyka w pracy z zespołami ponad 100 osób oraz rozbudowanymi strukturami organizacyjnymi.',
  },
  {
    id: '4',
    title: 'Sprzedaż i rozwój struktur',
    description: 'Doświadczenie w zarządzaniu sprzedażą regionalną oraz rozwoju struktur handlowych w branży FMCG.',
  },
];

export default function Competencies() {
  return (
    <section id="kompetencje" className="py-24 md:py-32 bg-[#ffffff]">
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
              Obszary doświadczenia
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-[#1a1a1a]">
            Kluczowe kompetencje
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full border border-[#e7e3dc] bg-[#fafaf9] p-8 transition-all duration-300 hover:border-[#c5c1ba] hover:shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-display font-normal text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8a8580] mt-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-[#4a4a4a] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
