// app/notes/layout.js
import React from 'react'
import "../globals.css"; 


export default function NotesLayout({ children }) {
  return (
    <section className='bg-white'>
      <main>
        {children}
      </main>
    </section>
  )
}
