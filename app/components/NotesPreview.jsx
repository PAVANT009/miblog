'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const notes = [
  {
    name: 'Joe Goldberg',
    avatar: 'https://i.pravatar.cc/100?img=5',
    title: 'Digital Transformation',
    content:
      "In today's world, digital transformation is reshaping how businesses deliver value. It involves full tech integration ....",
  },
  {
    name: 'Ananya Rao',
    avatar: 'https://i.pravatar.cc/100?img=47',
    title: 'Mindful Productivity',
    content:
      'Work with intention, not just attention. Avoid burnout by aligning tasks with your natural energy flow ....',
  },
  {
    name: 'David Lin',
    avatar: 'https://i.pravatar.cc/100?img=33',
    title: 'Founders Weekly',
    content:
      'Here’s what we learned building v1 in 2 weeks. No fluff, just raw iteration and shipping mindset ....',
  },
]

export default function MiniNoteCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notes.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const { name, avatar, title, content } = notes[index]

  return (
    <div className="w-[480px] h-[380px] bg-white border border-gray-300 rounded-md shadow-md flex overflow-hidden">
      <div className="w-[50%] bg-gray-50 p-4 flex flex-col justify-between border-r border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{title}</p>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-600 line-clamp-4 leading-relaxed">
          {content}
        </p>

        <input
        disabled
          type="email"
          placeholder="email@domain.com"
          className="mt-3 w-full px-2 py-1 text-xs border border-gray-400 rounded-md bg-amber-50 text-gray-800 placeholder:text-gray-500"
        />
      </div>

      <div className="w-[50%] bg-white p-4 flex items-start justify-center">
        <textarea
          placeholder="What's in your head?"
          disabled
          className="w-full h-full resize-none px-3 py-2 text-xs  rounded-md  text-gray-700 placeholder:text-gray-400 cursor-not-allowed"
        />
      </div>
    </div>
  )
}
