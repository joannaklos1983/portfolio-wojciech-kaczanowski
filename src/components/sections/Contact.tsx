'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

const contactInfo = [
  {
    label: 'Email',
    value: 'wojciech.kaczanowski@example.com',
    href: 'mailto:wojciech.kaczanowski@example.com',
  },
  {
    label: 'Telefon',
    value: '+48 XXX XXX XXX',
    href: 'tel:+48XXXXXXXXX',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/wojciech-kaczanowski',
    href: 'https://linkedin.com/in/wojciech-kaczanowski',
  },
  {
    label: 'Lokalizacja',
    value: 'Warszawa, Polska',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-[#f8f5f1] border-t border-[#ece8e1]">
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
              Kontakt
            </span>
            <div className="flex-1 h-px bg-[#d5d0c7]" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-normal text-[#1a1a1a]">
                Wojciech Kaczanowski
              </h2>
              <p className="text-[#4a4a4a] leading-relaxed max-w-2xl">
                Otwartość na rozmowę dotyczącą współpracy oraz nowych wyzwań zawodowych.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-[#e7e3dc] pb-4"
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      {item.label}
                    </span>
                    {item.href ? (
                      
                        href={item.href}
                        className="block text-[#2a2a2a] transition-colors duration-300 hover:text-[#6a6a6a]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#2a2a2a]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-[#e7e3dc]"
          >
            <p className="text-xs text-[#8a8580] text-center">
              © 2026 Wojciech Kaczanowski
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
