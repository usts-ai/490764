import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-0 sm:pt-0"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=85"
          alt="Équipe collaborant autour de données et questionnaires"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/88 via-[#002D62]/72 to-[#007BFF]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-[#0A1628]/30" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[#40E0D0]/20 blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-16 bottom-1/4 h-64 w-64 rounded-full bg-[#007BFF]/25 blur-[70px]"
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-4 font-[Syne] text-sm tracking-[0.2em] text-[#40E0D0] uppercase sm:text-base"
          style={{ fontWeight: 700 }}
        >
          Forméo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-[Syne] text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontWeight: 800 }}
        >
          Des questionnaires qui{' '}
          <span className="shimmer-text">transforment</span> chaque réponse
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Créez, partagez via QR code, suivez vos réponses dans un pipeline vivant et pilotez vos contacts — le tout en une seule expérience fluide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#007BFF] via-[#00C9FF] to-[#92FE9D] px-8 py-3.5 text-sm font-semibold text-[#0A1628] shadow-[0_12px_40px_rgba(0,201,255,0.35)] transition-transform duration-300 hover:scale-[1.04]"
          >
            <span className="relative z-10">Lancer ma démo</span>
          </a>
          <a
            href="#fonctionnalites"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#40E0D0]/50 hover:bg-white/10"
          >
            Découvrir les fonctionnalités
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-[#40E0D0]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
