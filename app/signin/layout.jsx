// app/signin/layout.js
import React from 'react'
import "../globals.css"; 


export default function SigninLayout({ children }) {
  return (
    <section >
      <main>
        {children}
      </main>
    </section>
  )
}
