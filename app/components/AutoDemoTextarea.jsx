'use client'

import { useEffect, useState } from 'react'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

export default function AutoDemoTextArea() {
  const [text, setText] = useState('')
  const [showButton, setShowButton] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

  const demoText = "Write your thoughts here and share them instantly with anyone, anywhere."

  useEffect(() => {
    let timeoutId

    // Typing phase
    if (text.length < demoText.length) {
      timeoutId = setTimeout(() => {
        setText(demoText.slice(0, text.length + 1))
      }, 50)
    } 
    // Show button after typing
    else if (!showButton) {
      timeoutId = setTimeout(() => {
        setShowButton(true)
      }, 500)
    }
    // Button hover effect
    else if (!buttonHover) {
      timeoutId = setTimeout(() => {
        setButtonHover(true)
      }, 800)
    }
    // Clear and restart
    else {
      timeoutId = setTimeout(() => {
        setText('')
        setShowButton(false)
        setButtonHover(false)
      }, 2000)
    }

    return () => clearTimeout(timeoutId)
  }, [text, showButton, buttonHover, demoText])

  return (
    <div className="p-4 space-y-4 ">
      <textarea
        value={text}
        readOnly
        className="w-full h-32 p-3 border-[1px] border-gray-400 rounded-lg  text-sm cursor-none  select-none pointer-events-none resize-none outline-none"
        style={{ userSelect: 'none' }}
        placeholder="Start typing..."
      />
      
      {showButton && (
        <div className="flex justify-end">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all duration-500 transform ${
              buttonHover 
                ? 'bg-amber-700 scale-110 shadow-xl shadow-amber-500/50' 
                : 'bg-amber-600 hover:bg-amber-700'
            }`}
            style={{
              transform: buttonHover ? 'scale(1.1)' : 'scale(1)',
              backgroundColor: buttonHover ? '#b45309' : '#d97706'
            }}
          >
            Send
            <PaperPlaneIcon 
              className="w-4 h-4 transition-transform duration-300"
              style={{
                transform: buttonHover ? 'translateY(-4px) translateX(4px) rotate(12deg)' : 'translateY(0px) translateX(0px) rotate(0deg)'
              }}
            />
          </button>
        </div>
      )}
    </div>
  )
}