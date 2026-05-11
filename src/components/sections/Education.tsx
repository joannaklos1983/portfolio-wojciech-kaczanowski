'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

export default function Education() {
  return (
    <section id="wyksztalcenie" className="py-16 md:py-20 bg-[#f3f0eb] border-t border-[#ece8e1]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs text-[#6a6a6a] font-medium tracking-wider uppercase">
              Wykształcenie
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>

          <div className="border-b border-[#e7e3dc] pb-6">
            <div className="space-y-1">
              <p className="text-lg text-[#2a2a2a]">
                Wyższa Szkoła Zarządzania i Psychologii w Poznaniu
              </p>
              <p className="text-sm text-[#6a6a6a]">
                Administracja publiczna
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
