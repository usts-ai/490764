import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { contacts, stats } from '../data/mock';

const ContactsPreview: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const statusColor = (status: string) => {
    if (status === 'Actif') return 'bg-[#2E7D32]/15 text-[#2E7D32]';
    if (status === 'Nouveau') return 'bg-[#007BFF]/15 text-[#007BFF]';
    return 'bg-[#FF9800]/15 text-[#E65100]';
  };

  return (
    <section id="contacts" ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7FF] via-white to-[#E8F8F5]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#7B1FA2] uppercase">
            Contacts
          </p>
          <h2
            className="mx-auto max-w-2xl font-[Syne] text-3xl leading-tight text-[#0A1628] sm:text-4xl md:text-5xl"
            style={{ fontWeight: 800 }}
          >
            Des fiches contact nées de chaque réponse
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#0A1628]/55 sm:text-lg">
            Historique, doublons détectés et vue unifiée — vos répondants deviennent une base vivante.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white p-5 text-center shadow-[0_16px_50px_rgba(0,45,98,0.07)] sm:p-6"
            >
              <p
                className="font-[Syne] text-2xl text-[#007BFF] sm:text-3xl md:text-4xl"
                style={{ fontWeight: 800 }}
              >
                {s.value}
                <span className="text-[#40E0D0]">{s.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-[#0A1628]/45 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-3xl bg-white p-5 shadow-[0_16px_50px_rgba(0,45,98,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(123,31,162,0.12)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="h-12 w-12 rounded-2xl object-cover ring-2 ring-[#007BFF]/15 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#40E0D0]" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-[#0A1628]">{c.name}</p>
                  <p className="truncate text-xs text-[#0A1628]/40">{c.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusColor(c.status)}`}>
                  {c.status}
                </span>
                <span className="text-xs text-[#0A1628]/40">
                  {c.forms} formulaire{c.forms > 1 ? 's' : ''}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsPreview;
