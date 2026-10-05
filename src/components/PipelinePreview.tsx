import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { pipelineColumns } from '../data/mock';

const PipelinePreview: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeCol, setActiveCol] = useState('nouvelle');

  return (
    <section id="pipeline" ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#001a3d] to-[#0A1628]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#007BFF]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#40E0D0]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#40E0D0] uppercase">
            Pipeline
          </p>
          <h2
            className="font-[Syne] text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontWeight: 800 }}
          >
            Chaque réponse devient une carte vivante
          </h2>
          <p className="mt-4 text-base text-white/55 sm:text-lg">
            Visualisez le flux Nouvelle → En cours → Traité. Cliquez une colonne pour la mettre en avant.
          </p>
        </motion.div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:hidden">
          {pipelineColumns.map((col) => (
            <button
              key={col.id}
              type="button"
              onClick={() => setActiveCol(col.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCol === col.id
                  ? 'bg-white text-[#0A1628]'
                  : 'bg-white/10 text-white/70'
              }`}
            >
              {col.title}
            </button>
          ))}
        </div>

        <div className="pipeline-scroll flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {pipelineColumns.map((col, ci) => {
            const isActive = activeCol === col.id;
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * ci }}
                onClick={() => setActiveCol(col.id)}
                className={`min-w-[280px] flex-1 cursor-pointer rounded-3xl border p-4 transition-all duration-500 sm:min-w-[300px] sm:p-5 ${
                  isActive
                    ? 'border-white/20 bg-white/10 shadow-[0_0_60px_rgba(0,123,255,0.2)] scale-[1.02]'
                    : 'border-white/5 bg-white/[0.03] opacity-80 hover:opacity-100 lg:opacity-100'
                } ${!isActive ? 'hidden sm:block' : ''}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: col.color, boxShadow: `0 0 12px ${col.color}` }}
                    />
                    <h3 className="font-[Syne] text-sm text-white sm:text-base" style={{ fontWeight: 700 }}>
                      {col.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
                    {col.cards.length}
                  </span>
                </div>

                <div className="space-y-3">
                  <AnimatePresence mode="popLayout">
                    {col.cards.map((card, i) => (
                      <motion.div
                        key={card.id}
                        layout
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 * i + 0.2 * ci }}
                        whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.12)' }}
                        className="rounded-2xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm"
                      >
                        <div className="mb-2 flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold text-white">{card.name}</p>
                          <span
                            className="mt-1 h-2 w-2 shrink-0 rounded-full"
                            style={{ background: col.color }}
                          />
                        </div>
                        <p className="mb-2 text-xs text-white/45">{card.form}</p>
                        <p className="text-[11px] tracking-wide text-white/30 uppercase">{card.time}</p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PipelinePreview;
