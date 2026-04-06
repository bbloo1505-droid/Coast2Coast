import { Clock, MapPin, Star, MessageSquare } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const ABOUT_IMG =
  'https://media.base44.com/images/public/69d3668b1520c771bb71df6d/25b431b0e_generated_d14ee241.png';

const REASONS = [
  {
    icon: Clock,
    title: '7-Day Local',
    desc: "Weekends, public holidays, early mornings. When shops are shut, Mitch often answers.",
  },
  {
    icon: MapPin,
    title: 'Coast & Hinterland',
    desc: 'Maleny to Caloundra, Cooroy, Maroochydore. Full kit on the van.',
  },
  {
    icon: Star,
    title: 'Google-Loved',
    desc: '35+ five-star Google reviews. Locals, utes, 4WDs, family cars.',
  },
  {
    icon: MessageSquare,
    title: 'Plain English',
    desc: 'Clear pricing before spanners turn, honest diagnosis, no dealership waffle or mystery charges.',
  },
];

export default function WhyUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-c2c-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection delay={0.08}>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-2xl shadow-black/50 ring-1 ring-white/10"
              whileHover={reduceMotion ? {} : { scale: 1.008 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={ABOUT_IMG}
                alt="Coast 2 Coast mobile mechanic workshop at sunrise"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-c2c-dark/75 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex gap-3 sm:gap-4">
                {[
                  ['35+', 'Google Reviews'],
                  ['7', 'Days a Week'],
                  ['4am', 'Emergency'],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    className="flex-1 min-w-0 bg-black/45 backdrop-blur-md rounded-xl p-3 text-center border border-white/10"
                  >
                    <div className="text-white font-extrabold text-base sm:text-lg leading-none">{val}</div>
                    <div className="text-white/50 text-[9px] sm:text-[10px] mt-1 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Mitch</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-white tracking-tight leading-tight text-balance">
                Not your average
                <br />
                mobile mechanic.
              </h2>
              <p className="mt-5 text-white/55 text-base md:text-lg leading-relaxed max-w-lg">
                Land Rover and 4WD specialist. Picks up on a Sunday, runs to Brisbane for parts if needed, finishes the
                job properly.
              </p>
            </AnimatedSection>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {REASONS.map((r, i) => (
                <AnimatedSection key={r.title} delay={0.08 + i * 0.07}>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 -m-1 hover:border-white/10 transition-colors duration-300">
                    <r.icon className="h-5 w-5 text-primary mb-3" aria-hidden />
                    <h3 className="text-white font-bold text-base tracking-tight">{r.title}</h3>
                    <p className="mt-1.5 text-white/45 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
