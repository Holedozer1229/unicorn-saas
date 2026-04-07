"use client"

import React, { useId } from "react"

interface UnicornOSLogoProps { className?: string; size?: number; iconOnly?: boolean; }

export default function UnicornOSLogo({ className="", size=48, iconOnly=false }: UnicornOSLogoProps) {
  const u=useId().split(":").join("_")
 const gradId="unicornGrad_"+u, glowId="glow_"+u
  const ts=Math.round(size*0.75), ss=Math.max(7,Math.round(size*0.18))

  const svgEl=(
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_25px_#67e8f9]">
      <defs>
        <linearGradient id={gradId} x1="30%" y1="20%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#e879f9" />
        </linearGradient>
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>
      <path d="M60 20 Q30 50 35 80 Q45 95 60 90 Q80 95 85 75 Q90 45 60 20" fill={"url(#"+gradId+")"} stroke="#ffffff" strokeWidth="3" filter={"url(#"+glowId+")"} />
      <path d="M60 20 L62 8 Q65 5 68 12" fill="#67e8f9" stroke="#ffffff" strokeWidth="4" />
      <circle cx="72" cy="48" r="6" fill="#0a0a1f" />
      <circle cx="74" cy="46" r="2" fill="#ffffff" />
    </svg>
  )

  if(iconOnly) return <div className={className}>{svgEl}</div>

  return (
    <div className={"flex items-center gap-3 "+className}>
      {svgEl}
      <div className="leading-none">
        <div style={{fontSize:ts,fontWeight:900,letterSpacing:"-0.03em",background:"linear-gradient(135deg,#cffafe,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>UnicornOS</div>
        <div style={{fontSize:ss,fontWeight:500,letterSpacing:"0.18em",color:"rgba(255,255,255,0.4)",fontFamily:"monospace",marginTop:2,textTransform:"uppercase"}}>THE INTELLIGENCE OPERATING SYSTEM</div>
      </div>
    </div>
  )
}