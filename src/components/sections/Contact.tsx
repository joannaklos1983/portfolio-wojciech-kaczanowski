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
    value: 'Wrocław, Polska',
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="border-t border-[#ece8e1] bg-[#f8f5f1] py-16 md:py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <div className="mb-8 flex items-center gap-4 md:mb-12">
            <span className="text-xs font-medium uppercase tracking-wider text-[#6a6a6a]">
              Kontakt
            </span>

            <div className="h-px flex-1 bg-[#d5d0c7]" />
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Intro */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="font-display text-2xl font-normal text-[#1a1a1a] md:text-3xl lg:text-4xl">
                Wojciech Kaczanowski
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-[#4a4a4a] md:text-base">
                Otwartość na rozmowę dotyczącą współpracy oraz nowych wyzwań
                zawodowych.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-2 md:gap-6 md:pt-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="border-b border-[#e7e3dc] pb-3.5 md:pb-4"
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wide text-[#7a7670]">
                      {item.label}
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-sm text-[#2a2a2a] transition-colors duration-300 hover:text-[#6a6a6a] md:text-base"
                        target={
                          item.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#2a2a2a] md:text-base">
                        {item.value}
                      </p>
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
            className="mt-12 border-t border-[#e7e3dc] pt-6 md:mt-16 md:pt-8"
          >
            <p className="text-center text-xs text-[#8a8580]">
              © 2026 Wojciech Kaczanowski
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
