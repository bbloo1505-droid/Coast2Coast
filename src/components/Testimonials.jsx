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

/** Decorative multicolour “G” mark (not official Google logo; evokes search/reviews). */
function GoogleMark({ className = 'h-10 w-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.209 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.86 11.86 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-stone-200/60 bg-c2c-cream py-24 md:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedSection>
            <div className="mx-auto mb-14 md:mb-20 max-w-4xl">
            <div className="rounded-3xl border border-stone-200/90 bg-white/90 p-8 md:p-10 shadow-xl shadow-stone-300/40 backdrop-blur-sm md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex flex-col items-center gap-3">
                  <GoogleMark className="h-12 w-12 md:h-14 md:w-14 drop-shadow-sm" />
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 ring-1 ring-amber-200/80"
                    aria-hidden
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
                    ))}
                    <span className="ml-1 text-amber-900/90">5.0</span>
                  </div>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Google reviews</p>

                <p className="mt-2 text-5xl font-black tabular-nums tracking-tight text-stone-900 md:text-6xl">35+</p>
                <p className="mt-1 text-lg font-semibold text-stone-700 md:text-xl">five-star reviews</p>

                <h2
                  id="reviews-heading"
                  className="mt-6 text-3xl font-extrabold leading-tight text-stone-900 sm:text-4xl md:text-5xl"
                >
                  What Sunshine Coast locals say
                </h2>
                <p className="mt-4 max-w-xl text-base text-stone-600 md:text-lg">
                  Real jobs: breakdowns, 4WDs, family cars. Word of mouth from people who called Mitch when it mattered.
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-[#1557b0] hover:shadow-xl"
                >
                  View on Google
                  <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.name}
              variants={cardVariants}
              whileHover={reduceMotion ? {} : { y: -6, transition: { duration: 0.25 } }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-6 shadow-lg shadow-stone-300/50 ring-1 ring-stone-100 transition-all duration-300 hover:border-amber-300/80 hover:shadow-2xl hover:shadow-amber-100/50 md:p-7"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-500 opacity-90"
                aria-hidden
              />
              <div className="pl-3">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <Quote className="h-8 w-8 shrink-0 text-amber-500/90" strokeWidth={1.75} aria-hidden />
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-[15px] font-medium leading-relaxed text-stone-800 md:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-end justify-between gap-3 border-t border-stone-100 pt-5">
                  <div className="min-w-0">
                    <p className="truncate font-bold text-stone-900">{review.name}</p>
                    <p className="mt-0.5 text-sm font-medium text-stone-600">{review.detail}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
