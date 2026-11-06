'use client'
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      // "some" reveals as soon as any part is visible, so very tall blocks
      // (long case studies on phones) never stay hidden.
      viewport={{ once: true, amount: 'some', margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
