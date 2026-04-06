import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/** Readable on bright sky / dark hero when header is transparent */
const onHeroNavShadow = 'drop-shadow-[0_1px_10px_rgba(0,0,0,0.88)]';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[70] transition-all duration-500',
          scrolled
            ? 'border-b border-stone-200/80 bg-white/95 shadow-md shadow-stone-200/50 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-[4.5rem]'}`}
          >
            <a
              href="#top"
              className="focus-ring flex items-center gap-3 group rounded-lg -m-1 p-1"
            >
              <img
                src="https://media.base44.com/images/public/user_69cf374edef9bfa9fad8e85c/35841f254_image.png"
                alt=""
                width={36}
                height={36}
                className={cn(
                  'h-9 w-9 rounded-full transition-[box-shadow] duration-300 ring-2',
                  scrolled
                    ? 'ring-stone-200 group-hover:ring-primary/30'
                    : 'ring-white/45 group-hover:ring-white/70'
                )}
              />
              <div className="hidden sm:block">
                <span
                  className={cn(
                    'font-inter text-sm font-bold tracking-tight leading-none block',
                    scrolled ? 'text-stone-900' : cn('text-white', onHeroNavShadow)
                  )}
                >
                  COAST 2 COAST
                </span>
                <span
                  className={cn(
                    'font-inter text-[10px] tracking-[0.15em] uppercase leading-none',
                    scrolled ? 'text-stone-500' : cn('text-white/85', onHeroNavShadow)
                  )}
                >
                  Mobile Mechanics
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'focus-ring rounded-md text-sm font-medium transition-colors duration-300',
                    scrolled
                      ? 'text-stone-600 hover:text-stone-900'
                      : cn('text-white/90 hover:text-white', onHeroNavShadow)
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0435835688"
                className="focus-ring inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-primary/20"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                0435 835 688
              </a>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className={cn(
                'focus-ring lg:hidden p-2 rounded-lg -m-1',
                scrolled ? 'text-stone-800' : cn('text-white', onHeroNavShadow)
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        {scrolled && <ScrollProgress />}
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-c2c-cream/98 backdrop-blur-xl lg:hidden pt-[4.5rem] border-t border-stone-200/60"
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-4.5rem)] gap-8 px-6 pb-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="focus-ring text-stone-900 text-2xl font-semibold tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:0435835688"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="focus-ring mt-2 flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-primary/25"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="h-0.5 bg-stone-200/80" aria-hidden>
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
