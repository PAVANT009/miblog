'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

export default function Logout() {
  return (
    <button
    className="absolute top-4 right-8 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 transition"
    onClick={() => signOut({ callbackUrl: '/signin' })}
  >
    Logout
  </button>
  )
}
