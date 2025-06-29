import React from 'react'

export default function Card({children,number,heading}) {
  return (
    <div className='shadow-md w-64 h-96 py-7 px-2 bg-white rounded-lg border-[1px] border-gray-200'>
          <h1 className="h-7 w-8 font-medium font-mono text-gray-500 text-sm my-3 mx-3 bg-gray-300 rounded-md flex items-center justify-center">
          {number}
        </h1>
      <h1 className="font-bold text-[21px] text-center font-sans">{heading}</h1>
      {children}
    </div>
  )
}
