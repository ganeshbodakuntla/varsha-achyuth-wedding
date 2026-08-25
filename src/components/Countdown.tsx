import { useEffect, useState } from "react"

function remaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    done: diff <= 0,
  }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  const [time, setTime] = useState(remaining(target))
  useEffect(() => {
    const id = setInterval(() => setTime(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  if (time.done) return <p className="font-display text-4xl text-[#f2d68c]">Today is the day! ❤️</p>
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-5">
      {Object.entries(time).filter(([k])=>k!=="done").map(([key,value]) => (
        <div key={key} className="rounded-xl border border-[#cfa34a]/30 bg-[#3a0d17]/60 px-3 py-5 backdrop-blur">
          <div className="font-display text-4xl font-semibold text-[#f5dda2] md:text-6xl">{String(value).padStart(2,"0")}</div>
          <div className="mt-1 text-[9px] uppercase tracking-[.3em] text-[#bba986]">{key}</div>
        </div>
      ))}
    </div>
  )
}