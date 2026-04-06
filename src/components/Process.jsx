import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const STEPS = [
  {
    num: '01',
    title: 'Call or Text',
    desc: "Noise, lights, or won't start. Mitch sorts what's urgent.",
  },
  {
    num: '02',
    title: 'Straight-Up Quote',
    desc: "Price before the spanners. No surprise add-ons.",
  },
  {
    num: '03',
    title: 'Rolls Up To You',
    desc: "Driveway, site, servo, Bruce pull-off. Workshop comes to you.",
  },
  {
    num: '04',
    title: 'Tested & Handed Over',
    desc: "Tested, explained in plain English. Back on the road.",
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-24 md:py-32 bg-c2c-steel relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-white tracking-tight text-balance">
              How it works on the Coast.
            </h2>
            <p className="mt-3 text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              Local. Van full of gear. No franchise script.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: reduceMotion ? 0.15 : 0.55,
                delay: reduceMotion ? 0 : i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl border border-white/5 bg-black/[0.12] p-6 md:p-7 shadow-soft backdrop-blur-[2px] hover:border-primary/25 hover:bg-black/[0.16] transition-colors duration-500 group"
            >
              <span className="text-4xl md:text-5xl font-inter font-black text-primary/30 leading-none block mb-3 group-hover:text-primary/45 transition-colors duration-500">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              {!reduceMotion && (
                <motion.div
                  className="mt-5 h-0.5 bg-primary/25 origin-left rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.25 + i * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
