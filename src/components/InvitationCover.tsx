import { AnimatePresence, motion } from "framer-motion"
import { MailOpen } from "lucide-react"
import { weddingData } from "../lib/weddingData"

export function InvitationCover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#240811] px-5"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: .9 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(207,163,74,.18),transparent_34%),linear-gradient(135deg,#240811,#4a101f_55%,#1b070d)]" />
          <div className="pointer-events-none absolute inset-5 border border-[#cfa34a]/30 md:inset-10" />
          <motion.div
            className="relative w-full max-w-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9 }}
          >
            <div className="gold-border relative z-10 overflow-hidden rounded-sm bg-[#f4ead8] text-[#4b1720] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
              <div className="pointer-events-none absolute inset-3 border border-[#a87924]/45" />
              <div className="relative z-10 px-8 py-14 text-center md:px-12">
                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.42em] text-[#8d6723]">You Are Cordially Invited</p>
                <div className="mx-auto mb-6 h-16 w-16 rotate-45 border border-[#b4872c] p-2">
                  <div className="flex h-full w-full -rotate-45 items-center justify-center text-2xl">ॐ</div>
                </div>
                <p className="font-display text-xl">To Celebrate the Wedding of</p>
                <h1 className="gold-text mt-4 font-display text-5xl font-semibold leading-none md:text-6xl">{weddingData.bride.name}</h1>
                <p className="my-2 font-display text-3xl">&amp;</p>
                <h1 className="gold-text font-display text-5xl font-semibold leading-none md:text-6xl">{weddingData.groom.name}</h1>
                <p className="mt-6 font-telugu text-sm text-[#7b5b2b]">శుభమస్తు</p>
                <motion.button
                  type="button"
                  onPointerUp={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onOpen()
                  }}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onOpen()
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: .98 }}
                  className="relative z-20 mt-9 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#4b101d] px-7 py-3 text-xs font-semibold uppercase tracking-[.22em] text-[#f8eac9] shadow-lg"
                >
                  <MailOpen size={16} /> Open Invitation
                </motion.button>
              </div>
              <div className="h-2 bg-gradient-to-r from-[#7d5a1e] via-[#e7c66c] to-[#7d5a1e]" />
            </div>
            <p className="mt-5 text-center text-[10px] uppercase tracking-[.28em] text-[#d7bd88]">A celebration of love, family &amp; forever</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}