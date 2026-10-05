import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.65 4.75 6.1V24h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-4V8.5z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.5L6 22H3l7.3-8.3L1 2h6.5l4.5 5.9L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z',
  },
];

const footerLinks = [
  {
    title: 'Produit',
    links: ['Questionnaires', 'Pipeline', 'QR codes', 'Contacts'],
  },
  {
    title: 'Ressources',
    links: ['Documentation', 'Guides', 'API', 'Statut'],
  },
  {
    title: 'Entreprise',
    links: ['À propos', 'Carrières', 'Presse', 'Contact'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A1628] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#007BFF]/20 blur-[100px]" />
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#40E0D0]/15 blur-[90px]" />
        <div className="absolute bottom-1/3 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#7B1FA2]/15 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="group mb-5 inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7h16M4 12h10M4 17h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-[Syne] text-xl" style={{ fontWeight: 800 }}>
                Forméo
              </span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/55">
              Collectez, suivez et analysez vos réponses avec une expérience fluide : questionnaires, QR codes, pipeline et contacts réunis.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-gradient-to-br hover:from-[#007BFF] hover:to-[#40E0D0] hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-[Syne] text-sm tracking-wide text-white" style={{ fontWeight: 700 }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#fonctionnalites"
                      className="group relative inline-block text-sm text-white/50 transition-colors hover:text-[#40E0D0]"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#40E0D0] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 Forméo. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-5 text-xs text-white/40">
            <a href="#cta" className="transition-colors hover:text-[#40E0D0]">
              Mentions légales
            </a>
            <a href="#cta" className="transition-colors hover:text-[#40E0D0]">
              Politique de confidentialité
            </a>
            <a href="#cta" className="transition-colors hover:text-[#40E0D0]">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
