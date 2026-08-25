import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { weddingData } from "../lib/weddingData"

export function MusicControl({ enabled }: { enabled: boolean }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!enabled || !audio.current) return
    audio.current.volume = .35
    audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [enabled])

  const toggle = async () => {
    if (!audio.current) return
    if (playing) {
      audio.current.pause()
      setPlaying(false)
    } else {
      try { await audio.current.play(); setPlaying(true) } catch {}
    }
  }

  return (
    <>
      <audio ref={audio} src={weddingData.music} loop preload="none" />
      {enabled && (
        <button
          onClick={toggle}
          aria-label={playing ? "Mute music" : "Play music"}
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b45c]/50 bg-[#3a0d17]/90 text-[#e8c76c] shadow-xl backdrop-blur"
        >
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}
    </>
  )
}