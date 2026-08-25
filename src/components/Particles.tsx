import { useMemo } from "react"

export function Petals() {
  const petals = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    left: `${(i * 17 + 3) % 100}%`,
    size: `${7 + (i % 4) * 2}px`,
    duration: `${10 + (i % 6) * 2}s`,
    delay: `${-(i * 1.8)}s`,
    drift: `${(i % 2 ? 1 : -1) * (30 + (i % 5) * 15)}px`,
  })), [])
  return <>{petals.map((p, i) => <span key={i} className="petal" style={{"--left":p.left,"--size":p.size,"--duration":p.duration,"--delay":p.delay,"--drift":p.drift} as React.CSSProperties} />)}</>
}

export function GoldDust() {
  const dots = useMemo(() => Array.from({ length: 35 }, (_, i) => ({
    left: `${(i * 29) % 100}%`,
    top: `${(i * 43) % 100}%`,
    size: 1 + (i % 3),
    delay: (i % 7) * .4,
  })), [])
  return <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">{dots.map((d,i)=><span key={i} className="absolute rounded-full bg-[#e8c76c]" style={{left:d.left,top:d.top,width:d.size,height:d.size,boxShadow:"0 0 12px #d8b45c",animation:`shimmer 3s ease-in-out ${d.delay}s infinite`}} />)}</div>
}