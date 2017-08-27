import React from 'react'

const ReadableIcon = ({primaryColor="black", secondaryColor="transparent", size=30}) => {
  return (
    <svg 
      height={size} 
      width={size}>
      <defs>
        <mask 
          id="mask" 
          x="0" 
          y="0" 
          width={size} 
          height={size}
        >
          <rect 
            id="alpha" 
            x="0" 
            y="0" 
            width={size} 
            height={size} 
            fill="white"
          />
          <text 
            id="title" 
            x="0" 
            y={size} 
            fontSize={size*1.5}
          >
            R
          </text>
        </mask>
      </defs>
     
      <rect 
        id="base" 
        x="0" 
        y="0" 
        width={size} 
        height={size} 
        fill={primaryColor} 
        style={{mask: "url(#mask)"}}
      />
    </svg>
  )
}

export default ReadableIcon