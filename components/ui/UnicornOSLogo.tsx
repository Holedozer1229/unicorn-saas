import React from "react"

const LOGO_URL="https://cdn.builder.io/api/v1/image/assets%2F30d4e57dd47944fd97a23eb4cc20e0a3%2F148de9e8aafb4d84a137c8b912393766?format=webp&width=600"

interface UnicornOSLogoProps { className?: string; size?: number; iconOnly?: boolean; }

export default function UnicornOSLogo({ className="", size=48, iconOnly=false }: UnicornOSLogoProps) {
  const ts=Math.round(size*0.75), ss=Math.max(7,Math.round(size*0.18))

  // Hero / full-page display: show the complete logo image (unicorn + baked-in wordmark)
  if(iconOnly) {
    return (
      <div className={className} style={{width:size*2.5,maxWidth:"100%"}}>
        <img src={LOGO_URL} alt="UnicornOS" style={{width:"100%",height:"auto",display:"block"}} draggable={false}/>
      </div>
    )
  }

  // Nav / sidebar: show just the unicorn head (natural crop) + wordmark text
  return (
    <div className={"flex items-center gap-3 "+className}>
      <div style={{width:size,height:size,overflow:"hidden",flexShrink:0}}>
        <img src={LOGO_URL} alt="UnicornOS" style={{width:"100%",height:"auto",display:"block"}} draggable={false}/>
      </div>
      <div style={{lineHeight:1}}>
        <div style={{fontSize:ts,fontWeight:900,letterSpacing:"-0.03em",background:"linear-gradient(135deg,#cffafe,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>UnicornOS</div>
        <div style={{fontSize:ss,fontWeight:500,letterSpacing:"0.18em",color:"rgba(255,255,255,0.4)",fontFamily:"monospace",marginTop:2,textTransform:"uppercase"}}>THE INTELLIGENCE OPERATING SYSTEM</div>
      </div>
    </div>
  )
}