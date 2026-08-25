import { motion } from "framer-motion"
import { Ornament } from "./Ornament"

export function SectionTitle({ eyebrow, title, telugu }: { eyebrow: string; title: string; telugu?: string }) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: .7 }}
    >
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.35em] text-[#d8b45c]">{eyebrow}</p>
      <h2 className="font-display text-5xl font-semibold leading-none text-[#fff4dc] md:text-7xl">{title}</h2>
      {telugu && <p className="font-telugu mt-4 text-sm text-[#d6c6aa]">{telugu}</p>}
      <Ornament className="mt-6" />
    </motion.div>
  )
}