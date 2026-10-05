import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { features } from '../data/mock';

const Features: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="fonctionnalites" ref={ref} className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,123,255,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#007BFF] uppercase">
            Fonctionnalités
          </p>
          <h2
            className="font-[Syne] text-3xl leading-tight text-[#0A1628] sm:text-4xl md:text-5xl"
            style={{ fontWeight: 800 }}
          >
            Tout le cycle de collecte,{' '}
            <span className="bg-gradient-to-r from-[#007BFF] to-[#40E0D0] bg-clip-text text-transparent">
              en un flux
            </span>
          </h2>
          <p className="mt-4 text-base text-[#0A1628]/60 sm:text-lg">
            De la création du questionnaire jusqu&apos;à la fiche contact, Forméo orchestre chaque étape avec clarté.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 * i }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,45,98,0.08)] transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,123,255,0.18)]"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${f.accent}cc, transparent 70%)`,
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg backdrop-blur-sm"
                    style={{ background: f.accent }}
                  >
                    <span className="font-[Syne] text-lg" style={{ fontWeight: 800 }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3
                  className="mb-2 font-[Syne] text-xl text-[#0A1628] transition-colors duration-300 group-hover:text-[#007BFF] sm:text-2xl"
                  style={{ fontWeight: 700 }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1628]/55 sm:text-base">
                  {f.description}
                </p>
                <div
                  className="mt-5 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24"
                  style={{ background: `linear-gradient(90deg, ${f.accent}, #92FE9D)` }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
