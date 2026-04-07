import React from "react"

const LOGO_URL="https://cdn.builder.io/api/v1/image/assets%2F30d4e57dd47944fd97a23eb4cc20e0a3%2F148de9e8aafb4d84a137c8b912393766?format=webp&width=800"

interface UnicornOSLogoProps { className?: string; size?: number; iconOnly?: boolean; }

export default function UnicornOSLogo({ className="", size=48, iconOnly=false }: UnicornOSLogoProps) {

  // Hero: full logo image, max-width responsive, cinematic sizing
  if(iconOnly) {
    const heroW = Math.round(size * 2.8)
    return (
      <div className={className} style={{width:heroW, maxWidth:"90vw"}}>
        <img src={LOGO_URL} alt="UnicornOS" style={{width:"100%",height:"auto",display:"block"}} draggable={false}/>
      </div>
    )
  }

  // Nav / sidebar: show just the unicorn head (portrait image, crop bottom text)
  // Container is wide enough to see the head clearly, height clips the wordmark out
  const navW = Math.round(size * 3.2)
  const navH = Math.round(size * 1.8)
  return (
    <div className={className} style={{width:navW, height:navH, overflow:"hidden", flexShrink:0}}>
      <img src={LOGO_URL} alt="UnicornOS"
        style={{width:"100%", height:"auto", display:"block", objectFit:"cover", objectPosition:"top center"}}
        draggable={false}
      />
    </div>
  )
}