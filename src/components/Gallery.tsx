import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function Gallery({ images }: { images: readonly string[] }) {
  const [selected, setSelected] = useState<number | null>(null)
  const next = () => setSelected(s => s === null ? 0 : (s + 1) % images.length)
  const prev = () => setSelected(s => s === null ? images.length - 1 : (s - 1 + images.length) % images.length)

  return (
    <>
      <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
        {images.map((src, i) => (
          <motion.button
            key={src}
            onClick={() => setSelected(i)}
            className="group relative h-[390px] min-w-[270px] snap-center overflow-hidden rounded-[1.2rem] border border-[#cfa34a]/25 bg-[#32101a] md:min-w-[330px]"
            whileHover={{ y: -8 }}
          >
            <img src={src} alt={`Wedding memory ${i + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" onError={(e)=>{e.currentTarget.src=`https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80`}} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e070d]/70 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[.3em] text-[#f5dfaa]">Memory {String(i+1).padStart(2,"0")}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#100308]/95 p-5 backdrop-blur-md" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}>
            <button className="absolute right-5 top-5 text-white" onClick={()=>setSelected(null)}><X /></button>
            <button className="absolute left-3 md:left-8 text-white" onClick={(e)=>{e.stopPropagation();prev()}}><ChevronLeft size={36}/></button>
            <motion.img key={selected} src={images[selected]} alt="" className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl" initial={{scale:.94,opacity:0}} animate={{scale:1,opacity:1}} onClick={e=>e.stopPropagation()} onError={(e)=>{e.currentTarget.src=`https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90`}} />
            <button className="absolute right-3 md:right-8 text-white" onClick={(e)=>{e.stopPropagation();next()}}><ChevronRight size={36}/></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}