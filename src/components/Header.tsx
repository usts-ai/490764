import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/mock';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,123,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] shadow-lg shadow-[#007BFF]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h10M4 17h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
          <span
            className={`font-[Syne] text-xl tracking-tight transition-colors ${
              scrolled ? 'text-[#0A1628]' : 'text-white'
            }`}
            style={{ fontWeight: 800 }}
          >
            Forméo
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-[#0A1628]/70 hover:text-[#007BFF]'
                  : 'text-white/80 hover:text-white'
              } after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#007BFF] after:to-[#40E0D0] after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#cta"
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-[#0A1628]/70 hover:text-[#007BFF]' : 'text-white/80 hover:text-white'
            }`}
          >
            Connexion
          </a>
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#007BFF]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#40E0D0]/40"
          >
            Essayer gratuitement
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl md:hidden ${
            scrolled ? 'bg-[#007BFF]/10' : 'bg-white/15 backdrop-blur'
          }`}
        >
          <span
            className={`block h-0.5 w-5 rounded transition-all duration-300 ${
              scrolled ? 'bg-[#0A1628]' : 'bg-white'
            } ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded transition-all duration-300 ${
              scrolled ? 'bg-[#0A1628]' : 'bg-white'
            } ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded transition-all duration-300 ${
              scrolled ? 'bg-[#0A1628]' : 'bg-white'
            } ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-white/10 bg-[#0A1628]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-[#40E0D0]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Essayer gratuitement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
