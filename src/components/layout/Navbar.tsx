'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';

const navLinks = [
  { label: 'Doświadczenie', href: '#doswiadczenie' },
  { label: 'Kompetencje', href: '#kompetencje' },
  { label: 'Wykształcenie', href: '#wyksztalcenie' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-[#e7e3dc] bg-[#f5f2ec]/95 shadow-sm backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo / Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="font-display text-xl font-normal text-[#1f1f1f] transition-colors hover:text-[#4a4a4a] md:text-2xl"
            >
              WK
            </a>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-[#4a4a4a] transition-colors hover:text-[#1f1f1f]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#4a4a4a] md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[#f5f2ec] md:hidden"
        >
          <Container className="pt-20">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-[#e7e3dc] pb-4 font-display text-2xl font-normal text-[#1f1f1f]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </Container>
        </motion.div>
      )}
    </>
  );
}
