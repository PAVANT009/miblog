'use client'

import { useRouter } from 'next/navigation'
import { ArrowRightIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function GetStartedBtn() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/signin')
  }

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-2 bg-black cursor-pointer rounded-2xl px-3 py-2"
    >
      <span className="text-sm font-medium text-white">Get started</span>

      <span className="relative w-[15px] h-[15px]">
        <ChevronRightIcon
          stroke="#6E6E6E"
          className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
        />
        <ArrowRightIcon
          stroke="#6E6E6E"
          className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </span>
    </button>
  )
}
