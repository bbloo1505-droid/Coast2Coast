import { Star, Quote, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Coast+2+Coast+Mobile+Mechanics+Sunshine+Coast+reviews';

const REVIEWS = [
  {
    name: 'Amy Antell',
    detail: 'Friday night, 8pm',
    text: 'Came out at 8pm on a Friday night and knew exactly what he was doing. Sorted us out in a tight pinch so we could get home. Very affordable. Extremely happy.',
  },
  {
    name: 'Wyatt Utz',
    detail: 'Same-day repair',
    text: 'Mitch was an absolute champion, fixed up my undrivable Colorado within an hour. Really honest, genuine, and the price was great.',
  },
  {
    name: 'Anita Wilson',
    detail: '4am callout',
    text: 'Went above and beyond. Came out to me at 4am to fix the car and also drove to Brisbane to pick up a part. Great mechanic, would definitely recommend.',
  },
  {
    name: 'Ricky Burton',
    detail: 'Sunday breakdown',
    text: "On holiday when our Prado wouldn't start. Being a Sunday, every mobile mechanic had no response. Mitch was the only one to answer. Absolute legend.",
  },
  {
    name: 'Siena Tabacchi',
    detail: 'Sunday, parts sourced overnight',
    text: "Can not recommend Mitch enough!! On a Sunday he went over and beyond to help when everyone else was shut. He was up early and called around to get parts sorted fast.",
  },
  {
    name: 'Cat Johnson',
    detail: 'Emergency response',
    text: "Mitch treated my car emergency with urgency and professionalism. Response time was immediate with a clear breakdown of fees. Very grateful for your service.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="reviews" className="py-24 md:py-32 bg-c2c-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Google</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-extrabold text-white tracking-tight text-balance">
              Customer reviews
            </h2>
            <p className="mt-4 text-white/45 text-base max-w-lg mx-auto">
              35+ five-star. Breakdowns, 4WDs, daily drivers. Sunshine Coast.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary/90 hover:text-primary transition-colors"
            >
              Read more on Google
              <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
            </a>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={cardVariants}
              whileHover={reduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
              className="bg-white/[0.035] border border-white/[0.08] rounded-2xl p-6 md:p-7 h-full flex flex-col group hover:border-primary/35 hover:bg-white/[0.05] transition-colors duration-500 shadow-soft"
            >
              <Quote className="h-6 w-6 text-primary/50 mb-4 group-hover:text-primary/80 transition-colors duration-300" aria-hidden />
              <p className="text-white/70 text-sm leading-relaxed flex-1 group-hover:text-white/85 transition-colors duration-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-end justify-between gap-3 pt-1 border-t border-white/5">
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{review.name}</p>
                  <p className="text-primary/75 text-xs mt-0.5">{review.detail}</p>
                </div>
                <div className="flex gap-0.5 shrink-0" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
