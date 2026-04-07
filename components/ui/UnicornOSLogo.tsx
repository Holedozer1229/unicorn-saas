import React from "react"

const LOGO_URL="https://cdn.builder.io/api/v1/image/assets%2F30d4e57dd47944fd97a23eb4cc20e0a3%2F148de9e8aafb4d84a137c8b912393766?format=webp&width=600"

interface UnicornOSLogoProps { className?: string; size?: number; iconOnly?: boolean; }

export default function UnicornOSLogo({ className="", size=48, iconOnly=false }: UnicornOSLogoProps) {

  // Hero / large display: full logo at wide format
  if(iconOnly) {
    return (
      <div className={className} style={{width:size*2.5,maxWidth:"100%"}}>
        <img src={LOGO_URL} alt="UnicornOS" style={{width:"100%",height:"auto",display:"block"}} draggable={false}/>
      </div>
    )
  }

  // Nav / sidebar / header: show full logo image at nav-appropriate width
  // size prop still controls relative scale: 24=small nav, 52=larger nav
  const w=Math.min(Math.max(Math.round(size*4.5),120),200)
  return (
    <div className={className} style={{width:w,flexShrink:0}}>
      <img src={LOGO_URL} alt="UnicornOS" style={{width:"100%",height:"auto",display:"block"}} draggable={false}/>
    </div>
  )
}