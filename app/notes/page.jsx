'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import face from '@/public/images/face.jpg'

const initialTitle = 'Digital Transformation'
const initialSubj =
  "In today's fast-paced world, digital transformation is reshaping the way businesses operate and deliver value to customers. It involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It also requires cultural change that challenges the status quo, experiments often, and gets comfortable with failure."

const first20Words = initialSubj.split(' ').slice(0, 20).join(' ') + ' ....'

// Helper function to chunk words
const chunkWords = (str, chunkSize) => {
  const words = str.split(' ')
  const result = []
  for (let i = 0; i < words.length; i += chunkSize) {
    result.push(words.slice(i, i + chunkSize).join(' '))
  }
  return result
}

export default function Page() {
  const [header, setHeader] = useState(initialTitle)
  const spanRef = useRef(null)
  const [inputWidth, setInputWidth] = useState(150)
  const [inputs, setInputs] = useState(() => chunkWords(initialSubj, 10))
  const inputRefs = useRef([])

  const maxslots = 100

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 20)
    }
  }, [header])

  useEffect(() => {
    const lastInput = inputRefs.current[inputs.length - 1]
    if (lastInput) lastInput.focus()
  }, [inputs.length])

  const handleChange = (index, e) => {
    const newValue = e.target.value
    const newInputs = [...inputs]
    newInputs[index] = newValue
    setInputs(newInputs)
  }

  const moveCaretToEnd = (el) => {
    const length = el.value.length
    el.setSelectionRange(length, length)
    el.focus()
  }

  const moveCaretToStart = (el) => {
    el.setSelectionRange(0, 0)
    el.focus()
  }

  return (
    <div className="bg-white pt-24 pb-13 font-sans">
      <div className="flex flex-row w-[90%] h-[80vh] mx-auto border border-gray-300 rounded-xl shadow-lg overflow-hidden">
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
        </div>

        <div className="flex flex-col gap-6 px-8 py-10 w-full overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="relative w-fit">
            <input
              type="text"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              style={{ width: `${inputWidth}px` }}
              className="text-5xl font-bold border-b-2 border-orange-300 focus:outline-none focus:border-orange-500 placeholder-gray-400 transition-all duration-300"
              placeholder="Header"
            />
            <span
              ref={spanRef}
              className="absolute invisible whitespace-pre text-5xl font-bold border-b-2 border-b-gray-400"
              aria-hidden="true"
            >
              {header || 'Header'}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {inputs.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={maxslots}
                value={value}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => {
                  const caretPos = e.currentTarget.selectionStart
                  const atStart = caretPos === 0
                  const atEnd = caretPos === value.length

                  if (e.key === 'ArrowUp' && index > 0) {
                    e.preventDefault()
                    moveCaretToEnd(inputRefs.current[index - 1])
                  }
                  if (e.key === 'ArrowDown' && index < inputs.length - 1) {
                    e.preventDefault()
                    moveCaretToStart(inputRefs.current[index + 1])
                  }

                  if (
                    (e.key === 'Backspace' || e.key === 'ArrowLeft') &&
                    atStart &&
                    index > 0
                  ) {
                    e.preventDefault()
                    moveCaretToEnd(inputRefs.current[index - 1])
                  }

                  if (e.key === 'ArrowRight' && atEnd && index < inputs.length - 1) {
                    e.preventDefault()
                    moveCaretToStart(inputRefs.current[index + 1])
                  }

                  if (e.key === 'Enter') {
                    e.preventDefault()
                    const cursorPos = caretPos
                    const currentText = inputs[index]
                    const before = currentText.slice(0, cursorPos)
                    const after = currentText.slice(cursorPos)

                    const newInputs = [...inputs]
                    newInputs[index] = before
                    newInputs.splice(index + 1, 0, after)

                    setInputs(newInputs)

                    setTimeout(() => {
                      inputRefs.current[index + 1]?.focus()
                      inputRefs.current[index + 1]?.setSelectionRange(0, 0)
                    }, 0)
                  }

                  if (
                    e.key === 'Backspace' &&
                    atStart &&
                    index > 0 &&
                    inputs[index].length > 0
                  ) {
                    e.preventDefault()

                    const currentWords = inputs[index].trim().split(' ')
                    const prevInput = inputs[index - 1]
                    const prevLength = prevInput.length

                    let movedWords = []
                    let movedLength = 0

                    for (let i = 0; i < currentWords.length; i++) {
                      const word = currentWords[i]
                      const space = movedWords.length > 0 ? 1 : 0
                      const wordLength = word.length + space
                      if (prevLength + movedLength + wordLength <= maxslots) {
                        movedWords.push(word)
                        movedLength += wordLength
                      } else {
                        break
                      }
                    }

                    if (movedWords.length > 0) {
                      const newPrev = (
                        prevInput +
                        ' ' +
                        movedWords.join(' ')
                      ).trim()
                      const newCurrent = currentWords
                        .slice(movedWords.length)
                        .join(' ')

                      const newInputs = [...inputs]
                      newInputs[index - 1] = newPrev
                      newInputs[index] = newCurrent
                      setInputs(newInputs)

                      setTimeout(() => {
                        moveCaretToEnd(inputRefs.current[index - 1])
                      }, 0)
                    }
                  }
                }}
                className="w-full p-2 border-b-[1px] outline-none border-b-gray-200 focus:border-b-amber-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
