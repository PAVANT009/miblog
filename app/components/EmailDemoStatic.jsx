'use client'
import { useEffect, useState } from 'react'
import { Cross2Icon, MinusIcon } from '@radix-ui/react-icons'

const demoPool = [
  'team@example.com',
  'hello@startup.com',
  'client@brand.com',
  'user@gmail.com',
  'founder@build.io',
]

const DISPLAY_TIME = 3000 // ms before email gets removed
const SWAP_TIME = 400     // ms before delete to show Cross2Icon

export default function EmailDemoLoop() {
  const [emails, setEmails] = useState([]) // { email, addedAt }

  useEffect(() => {
    const interval = setInterval(() => {
      setEmails((prev) => {
        const now = Date.now()

        // Remove emails that are too old
        const updated = prev.filter(({ addedAt }) => now - addedAt < DISPLAY_TIME)

        // Add new email if < 3
        if (updated.length < 3) {
          const nextEmail = demoPool[(updated.length + now) % demoPool.length]
          updated.push({ email: nextEmail, addedAt: now })
        }

        return updated
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const now = Date.now()

  return (
    <div className="bg-white pointer-events-auto select-none w-full max-w-xl p-6 space-y-4">

      <div className="flex flex-wrap gap-2 min-h-[40px] transition-all duration-300">
        {emails.map(({ email, addedAt }, idx) => {
          const timeAlive = now - addedAt
          const isAboutToRemove = timeAlive > DISPLAY_TIME - SWAP_TIME

          return (
            <span
              key={`${email}-${addedAt}`}
              className="group relative flex items-center bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium opacity-90 transition"
            >
              {email}
              <span className="ml-2 relative w-5 h-5">
                {isAboutToRemove ? (
                  <Cross2Icon className="w-5 h-5 text-amber-500 transition-opacity duration-200" />
                ) : (
                  <MinusIcon className="w-5 h-5 text-amber-400 transition-opacity duration-200" />
                )}
              </span>
            </span>
          )
        })}
      </div>

      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-gray-50 ">
        <input
          type="text"
          placeholder="Add email and press Enter"
          className="flex-grow px-4 py-2 text-sm text-gray-400 bg-gray-50 outline-none cursor-default"
        />

      </div>
    </div>
  )
}
