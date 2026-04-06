import { Wrench, Settings, ShieldCheck, Truck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const SERVICES_IMG =
  'https://media.base44.com/images/public/69d3668b1520c771bb71df6d/69291585e_generated_61701436.png';

const SERVICES = [
  {
    icon: Wrench,
    title: 'General Mechanical',
    desc: 'Diagnostics, brakes, suspension, electrics, cooling. At your place, not in a queue.',
  },
  {
    icon: Settings,
    title: 'Engine, Gearbox & Diff',
    desc: 'Rebuilds and repairs for hard-working gear. Land Rover, 4WDs, dailies.',
  },
  {
    icon: Truck,
    title: 'Breakdowns & Callouts',
    desc: 'Weekend arvo or late night. Mobile workshop, fast response, 7 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Servicing & Certificates',
    desc: 'Logbook servicing. Qld safety certificates (roadworthy). No dealership runaround.',
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-c2c-steel overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.08) 0%, transparent 45%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-white tracking-tight leading-tight max-w-xl text-balance"
          >
            Workshop on wheels.
          </h2>
          <p className="mt-4 text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Same gear as a shop. You stay put. Hinterland to the coast.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection delay={0.08}>
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-black/20"
              whileHover={reduceMotion ? {} : { scale: 1.015 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={SERVICES_IMG}
                alt="Precision automotive engine and gearbox work"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-c2c-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center bg-primary text-white text-[10px] font-bold px-2.5 py-1.5 rounded-sm tracking-wide uppercase shadow-lg">
                4WD &amp; Land Rover
              </div>
            </motion.div>
          </AnimatedSection>

          <div className="space-y-8">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={0.12 + i * 0.08}>
                <motion.div
                  className="group flex gap-5 rounded-xl p-3 -m-3 hover:bg-white/[0.06] transition-colors duration-300"
                  whileHover={reduceMotion ? {} : { x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex-shrink-0 mt-1 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <s.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-zinc-400 text-[15px] leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
