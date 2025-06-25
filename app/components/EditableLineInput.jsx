'use client'

import React, { useRef, useEffect, useState } from 'react'

const maxslots = 100

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

export default function EditableLineInput({ initialText, onTextChange }) {
  const [inputs, setInputs] = useState(() => chunkByCharLength(initialText, maxslots))
  const inputRefs = useRef([])

  const moveCaretToEnd = (el) => {
    const length = el.value.length
    el.setSelectionRange(length, length)
    el.focus()
  }

  const moveCaretToStart = (el) => {
    el.setSelectionRange(0, 0)
    el.focus()
  }

  useEffect(() => {
    onTextChange(inputs.join(' ').replace(/\s+/g, ' ').trim())
  }, [inputs])

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

    setTimeout(() => {
      const isOverflowOccurred = newInputs.length > inputs.length
      if (isCaretAtEnd && isOverflowOccurred && newInputs[index + 1]) {
        moveCaretToStart(inputRefs.current[index + 1])
      } else {
        const el = inputRefs.current[index]
        if (el) {
          const pos = Math.min(cursorPos, newInputs[index].length)
          el.setSelectionRange(pos, pos)
          el.focus()
        }
      }
    }, 0)
  }

  return (
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
              const before = value.slice(0, caretPos)
              const after = value.slice(caretPos)
              const newInputs = [...inputs]
              newInputs[index] = before
              newInputs.splice(index + 1, 0, after)
              setInputs(newInputs)

              setTimeout(() => {
                moveCaretToStart(inputRefs.current[index + 1])
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
  )
}
