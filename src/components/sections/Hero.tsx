'use client'

import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-[#c9bfb3] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#8a8176]">
              Executive Portfolio
            </div>

            <div className="space-y-6">
              <h1 className="max-w-2xl">
                Strategic Leadership Through Innovation & Vision
              </h1>

              <p className="max-w-xl text-lg text-[#5f584f] md:text-xl">
                Building modern business experiences, executive strategies,
                and scalable digital transformation initiatives.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#1a1816] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90">
                View Experience
              </button>

              <button className="rounded-full border border-[#c9bfb3] px-7 py-4 text-sm font-medium text-[#1a1816] transition hover:bg-[#e8dfd4]">
                Strategic Projects
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] border border-[#d8cdc1] bg-gradient-to-br from-[#ebe3d8] to-[#d8cdc1]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_60%)]" />

            <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-[#6f665d]">
              Executive Portrait
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
