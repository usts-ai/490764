import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTA: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="cta" ref={ref} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF] via-[#0056b3] to-[#7B1FA2]" />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#40E0D0]/30 blur-[80px]"
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#92FE9D]/25 blur-[90px]"
          />

          <div className="relative z-10">
            <h2
              className="mx-auto max-w-2xl font-[Syne] text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontWeight: 800 }}
            >
              Prêt à faire parler vos données ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/70 sm:text-lg">
              Rejoignez les équipes qui collectent, pipelinent et relient chaque réponse à un contact — sans friction.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#top"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#007BFF] shadow-xl transition-transform duration-300 hover:scale-105 sm:w-auto"
              >
                Créer mon compte
              </a>
              <a
                href="#fonctionnalites"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20 sm:w-auto"
              >
                Voir une démo guidée
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
