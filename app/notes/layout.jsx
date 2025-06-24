// app/notes/layout.js
import React from 'react'
import "../globals.css"; 


export default function NotesLayout({ children }) {
  return (
    <section className='bg-red-800 w-screen h-[80vh]'>
      <main>
        {children}
      </main>
    </section>
  )
}
