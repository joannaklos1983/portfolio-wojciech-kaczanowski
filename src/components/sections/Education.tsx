'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

export default function Education() {
  return (
    <section id="wyksztalcenie" className="py-24 md:py-32 bg-[#f3f0eb]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-[#6a6a6a] font-medium tracking-wider uppercase">
              Wykształcenie
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>

          <div className="border border-[#e7e3dc] bg-[#fafaf9] p-8 md:p-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-normal text-[#1a1a1a]">
                  Wyższa Szkoła Zarządzania i Psychologii w Poznaniu
                </h3>
                <p className="text-[#6a6a6a]">
                  Administracja publiczna
                </p>
              </div>

              <div className="pt-4 border-t border-[#e7e3dc]">
                <p className="text-[#4a4a4a] leading-relaxed">
                  Wieloletnia praktyka managerska w środowisku FMCG oraz doświadczenie w pracy z rozbudowanymi strukturami organizacyjnymi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
