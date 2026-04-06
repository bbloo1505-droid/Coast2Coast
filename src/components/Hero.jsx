import { motion, useReducedMotion } from 'framer-motion';
import { Phone, ArrowDown } from 'lucide-react';

const HERO_IMG =
  'https://media.base44.com/images/public/69d3668b1520c771bb71df6d/8b4a7808d_generated_691870c3.png';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-end pb-20 md:items-center md:pb-0 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <motion.img
          src={HERO_IMG}
          alt="Sunshine Coast mobile mechanic working on a raised 4WD, tools and service van"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.6, ease }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-c2c-dark via-c2c-dark/70 to-c2c-dark/25 md:bg-gradient-to-r md:from-c2c-dark md:via-c2c-dark/80 md:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.04%22/%3E%3C/svg%3E')] opacity-40 mix-blend-overlay pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-28 md:pt-0">
        <div className="max-w-2xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.2 }}
            className="mb-7 flex max-w-sm"
          >
            <div className="w-[3px] shrink-0 bg-primary" aria-hidden />
            <div className="min-w-0 flex-1 border border-white/10 border-l-0 bg-[#06080c]/90 px-4 py-3 sm:px-5 sm:py-3.5 rounded-r-sm">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                Mobile mechanic
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-white/60 leading-snug">
                Sunshine Coast QLD. Open 7 days.
              </p>
            </div>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.4, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-extrabold text-white leading-[1.05] tracking-tight text-balance"
          >
            Your mechanic,
            <br />
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.55, ease }}
              className="text-primary"
            >
              at your door.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.72 }}
            className="mt-5 md:mt-6 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
          >
            Logbook work, repairs, callouts. Hinterland to the coast. 4WDs, utes, daily drivers. Engine, gearbox and
            diff. Land Rover specialist.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.85 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.a
              href="tel:0435835688"
              whileHover={reduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-red-800 text-primary-foreground px-8 py-4 rounded-md text-base font-semibold transition-colors duration-300 shadow-cta shadow-primary/30"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span className="tabular-nums tracking-tight">0435 835 688</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? {} : { scale: 1.01 }}
              whileTap={reduceMotion ? {} : { scale: 0.99 }}
              className="focus-ring inline-flex items-center justify-center bg-white/10 hover:bg-white/18 border border-white/20 text-white px-8 py-4 rounded-md text-base font-semibold transition-colors duration-300"
            >
              Get a quote
            </motion.a>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 1 }}
            className="mt-6 text-white/40 text-xs font-medium tracking-wide"
          >
            Sunshine Coast QLD
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.5, duration: reduceMotion ? 0 : 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a
          href="#services"
          className="focus-ring flex flex-col items-center gap-1 rounded-sm px-2 py-1.5 text-white/45 hover:text-white/75 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Services</span>
          {reduceMotion ? (
            <ArrowDown className="h-5 w-5" aria-hidden />
          ) : (
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-5 w-5" aria-hidden />
            </motion.span>
          )}
        </a>
      </motion.div>
    </section>
  );
}
