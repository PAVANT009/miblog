'use client'
import { useState } from 'react'

export default function HoverInfoBox({ shortHeader, descriptionText, Svg }) {
  const r = 3
  const crcol = "#d1d5db"

  return (
    <div className="group relative w-40 h-40 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-300 cursor-pointer overflow-hidden">

      {/* Corner Dots */}
      {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
        <svg
          key={i}
          className={`absolute z-20 transition-all duration-300 ${
            pos === "top-0 left-0" ? "top-[19px] left-[50px] group-hover:top-1 group-hover:left-1" :
            pos === "top-0 right-0" ? "top-[19px] right-[50px] group-hover:top-1 group-hover:right-1" :
            pos === "bottom-0 left-0" ? "bottom-[89px] left-[50px] group-hover:bottom-1 group-hover:left-1" :
            "bottom-[89px] right-[50px] group-hover:bottom-1 group-hover:right-1"
          }`}
          width={r}
          height={r}
          viewBox="0 0 15 15"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill={crcol} />
        </svg>
      ))}

      {/* Icon (fades out on hover) */}
      <div className="relative flex items-center justify-center h-16 w-16 rounded-lg border border-gray-300 bg-white mx-auto transition-opacity duration-300 group-hover:opacity-0">
        {Svg}
      </div>

      {/* Header - moves to top on hover */}
      <div className="absolute left-0 right-0 text-center transition-all duration-300 group-hover:top-3 top-[95px]">
        <h1 className="text-sm font-semibold text-gray-700">{shortHeader}</h1>
      </div>

      {/* Description - fades in under moved header */}
      <div className="absolute top-[90px] left-0 right-0 px-3 text-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <p className="text-xs text-gray-500">{descriptionText}</p>
      </div>
    </div>
  )
}
