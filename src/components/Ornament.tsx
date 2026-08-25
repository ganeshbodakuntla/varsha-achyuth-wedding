import { motion } from "framer-motion"

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#cfa34a]" />
      <motion.span
        className="h-2.5 w-2.5 rotate-45 border border-[#d8b45c]"
        animate={{ rotate: [45, 225, 405], opacity: [.55, 1, .55] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#cfa34a]" />
    </div>
  )
}