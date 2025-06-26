import Image from 'next/image'
import React, { useState } from 'react'
import face from '@/public/images/face.jpg'
import DynamicInputs from './DynamicInputs'


export default function Pagesfacecard({initialTitle,first20Words}) {

  return (
        <div className="w-[30%] bg-gradient-to-br from-gray-100 to-gray-200 px-10 py-12 border-r border-gray-300">
          <Image
            alt="face-icon"
            src={face}
            className="w-[60px] h-[60px] rounded-full mb-4"
          />
          <h2 className="text-sm text-gray-500 mb-1 capitalize tracking-wide">
            Joe Goldberg
          </h2>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {initialTitle}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            {first20Words}
          </p>
          <div
          name="email-list"
  className="w-full h-50 resize-none p-4 mt-7 rounded-md bg-amber-50 outline-none focus:ring-2 focus:ring-amber-200 transition-all duration-200">
            <DynamicInputs/>

        </div>
        </div>
  )
}
