import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={
        prefersReducedMotion
          ? { duration: 0.15 }
          : { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
