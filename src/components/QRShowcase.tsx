import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const QRShowcase: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cells = Array.from({ length: 81 }, (_, i) => {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const isCorner =
      (row < 3 && col < 3) ||
      (row < 3 && col > 5) ||
      (row > 5 && col < 3);
    const filled = isCorner || ((row * 7 + col * 3) % 5 !== 0);
    return filled;
  });

  return (
    <section id="qr" ref={ref} className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75 }}
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#007BFF] uppercase">
            Partage QR
          </p>
          <h2
            className="font-[Syne] text-3xl leading-tight text-[#0A1628] sm:text-4xl md:text-5xl"
            style={{ fontWeight: 800 }}
          >
            Un scan, et la collecte commence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#0A1628]/60 sm:text-lg">
            Forméo génère automatiquement un lien unique et un QR code pour chaque questionnaire. Affichez-le en magasin, en événement ou par email — les réponses affluent instantanément dans votre pipeline.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Lien partageable en un clic',
              'QR code haute résolution, prêt à imprimer',
              'Suivi des scans et des conversions',
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-[#0A1628]/80 sm:text-base"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-gradient-to-r from-[#00C9FF]/30 to-[#92FE9D]/30 blur-[60px] sm:h-80 sm:w-80" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative gradient-border rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(0,123,255,0.2)] sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-[Syne] text-sm text-[#0A1628]" style={{ fontWeight: 700 }}>
                  Satisfaction client Q1
                </p>
                <p className="text-xs text-[#0A1628]/40">formeo.app/q/sat-q1</p>
              </div>
              <span className="rounded-full bg-[#40E0D0]/20 px-3 py-1 text-[11px] font-semibold text-[#007BFF]">
                Actif
              </span>
            </div>

            <div className="mx-auto grid w-52 grid-cols-9 gap-1 rounded-2xl bg-[#0A1628] p-4 sm:w-56">
              {cells.map((filled, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.008, duration: 0.25 }}
                  className={`aspect-square rounded-[2px] ${
                    filled ? 'bg-gradient-to-br from-[#40E0D0] to-[#007BFF]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                className="flex-1 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C9FF] py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Télécharger le QR
              </button>
              <button
                type="button"
                className="flex-1 rounded-xl border border-[#007BFF]/20 bg-[#F0F7FF] py-2.5 text-xs font-semibold text-[#007BFF] transition-colors hover:bg-[#007BFF]/10"
              >
                Copier le lien
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QRShowcase;
