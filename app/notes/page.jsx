'use client'

import React, { useRef, useState, useEffect } from 'react'
import Pagesfacecard from '../components/Pagesfacecard'

const initialTitle = 'Digital Transformation'
const initialSubj =
  "In today's fast-paced world, digital transformation is reshaping the way businesses operate and deliver value to customers. It involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It also requires cultural change that challenges the status quo, experiments often, and gets comfortable with failure."

const first20Words = initialSubj.split(' ').slice(0, 20).join(' ') + ' ....'
const maxslots = 100

// ✅ Chunk based on character length (respects maxslots)
const chunkByCharLength = (text, maxChars) => {
  const words = text.split(' ')
  const result = []
  let currentLine = ''

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxChars) {
      currentLine = (currentLine + ' ' + word).trim()
    } else {
      result.push(currentLine)
      currentLine = word
    }
  }

  if (currentLine) result.push(currentLine)
  return result
}

export default function Page() {
  const [header, setHeader] = useState(initialTitle)
  const spanRef = useRef(null)
  const [inputWidth, setInputWidth] = useState(150)
  const [inputs, setInputs] = useState(() => chunkByCharLength(initialSubj, maxslots))
  const inputRefs = useRef([])

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 20)
    }
  }, [header])

  useEffect(() => {
    const lastInput = inputRefs.current[inputs.length - 1]
    if (lastInput) lastInput.focus()
  }, [inputs.length])

  const moveCaretToEnd = (el) => {
    const length = el.value.length
    el.setSelectionRange(length, length)
    el.focus()
  }

  const moveCaretToStart = (el) => {
    el.setSelectionRange(0, 0)
    el.focus()
  }

  const handleChange = (index, e) => {
    const inputEl = e.target
    const cursorPos = inputEl.selectionStart
    const newValue = inputEl.value
    const isCaretAtEnd = cursorPos === newValue.length

    const newInputs = [...inputs]

    if (newValue.length <= maxslots) {
      newInputs[index] = newValue
    } else {
      let currentLine = newValue.slice(0, maxslots)
      let overflowText = newValue.slice(maxslots)

      if (currentLine.length === maxslots && newValue[maxslots] !== ' ') {
        const lastSpaceIndex = currentLine.lastIndexOf(' ')
        if (lastSpaceIndex > maxslots * 0.7) {
          overflowText = newValue.slice(lastSpaceIndex)
          currentLine = newValue.slice(0, lastSpaceIndex)
        }
      }

      newInputs[index] = currentLine

      let i = index + 1
      while (overflowText.length > 0) {
        const nextLine = newInputs[i] || ''
        const combinedText = overflowText + nextLine

        if (combinedText.length <= maxslots) {
          newInputs[i] = combinedText
          overflowText = ''
        } else {
          let lineText = combinedText.slice(0, maxslots)
          let remaining = combinedText.slice(maxslots)

          if (lineText.length === maxslots && combinedText[maxslots] !== ' ') {
            const lastSpaceIndex = lineText.lastIndexOf(' ')
            if (lastSpaceIndex > maxslots * 0.7) {
              remaining = combinedText.slice(lastSpaceIndex)
              lineText = combinedText.slice(0, lastSpaceIndex)
            }
          }

          if (newInputs[i]) {
            newInputs[i] = lineText
          } else {
            newInputs.push(lineText)
          }

          overflowText = remaining
        }
        i++
      }
    }

    setInputs(newInputs)

    // ✅ Cursor stays where it was (or goes to end of current line) — no jump unless you do it
    setTimeout(() => {
      const el = inputRefs.current[index]
      if (el) {
        const pos = Math.min(cursorPos, newInputs[index].length)
        el.focus()
        el.setSelectionRange(pos, pos)
      }
    }, 0)
  }

  return (
    <div className="bg-white pt-24 pb-13 font-sans">
      <div className="flex flex-row w-[90%] h-[80vh] mx-auto border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <Pagesfacecard initialTitle={initialTitle} first20Words={first20Words} />

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

                  if ((e.key === 'Backspace' || e.key === 'ArrowLeft') && atStart && index > 0) {
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

                  if (e.key === 'Backspace' && value === '' && index < inputs.length - 1) {
                    e.preventDefault()
                    const newInputs = [...inputs]
                    newInputs.splice(index, 1)
                    setInputs(newInputs)
                    setTimeout(() => {
                      moveCaretToEnd(inputRefs.current[index - 1] || inputRefs.current[0])
                    }, 0)
                  }

                  if (
                    e.key === 'Backspace' &&
                    atStart &&
                    index > 0 &&
                    inputs[index].length > 0
                  ) {
                    e.preventDefault()
                    const currentText = inputs[index]
                    const prevInput = inputs[index - 1]
                    const prevLength = prevInput.length
                    const maxMove = maxslots - prevLength

                    if (maxMove > 0) {
                      const moveLength = Math.min(currentText.length, maxMove)
                      const textToMove = currentText.slice(0, moveLength)
                      const remainingText = currentText.slice(moveLength)

                      const newInputs = [...inputs]
                      newInputs[index - 1] = prevInput + textToMove
                      newInputs[index] = remainingText
                      setInputs(newInputs)

                      setTimeout(() => {
                        moveCaretToEnd(inputRefs.current[index - 1])
                      }, 0)
                    }
                  }
                }}
                className="w-full p-2 border-b-[1px] outline-none border-b-gray-200 focus:border-b-amber-500"
                style={{ whiteSpace: 'pre' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
