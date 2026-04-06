import { Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

export default function CallToAction() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-primary"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 45%, #fff 0%, transparent 55%), radial-gradient(circle at 85% 15%, #fff 0%, transparent 45%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-900/15" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
        <AnimatedSection>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-white tracking-tight leading-tight text-balance drop-shadow-sm"
          >
            Stuck on the Sunshine Coast?
            <br />
            Call Mitch.
          </h2>
          <p className="mt-5 text-white/80 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Mobile. Hinterland to beach suburbs. 7 days.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:0435835688"
              whileHover={reduceMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              className="focus-ring inline-flex items-center gap-2.5 bg-white text-primary hover:bg-white/95 px-8 py-4 rounded-full text-base font-semibold shadow-cta transition-colors duration-300"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              0435 835 688
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? {} : { scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.99 }}
              className="focus-ring inline-flex items-center bg-white/15 hover:bg-white/25 border border-white/35 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors duration-300 backdrop-blur-sm"
            >
              Get a Quote
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
