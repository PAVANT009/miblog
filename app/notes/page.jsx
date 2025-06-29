'use client'

import React, { useRef, useState, useEffect } from 'react'
import Pagesfacecard from '../components/Pagesfacecard'
import { PaperPlaneIcon, RowsIcon, SquareIcon } from '@radix-ui/react-icons'
import EditableLineInput from '../components/EditableLineInput'
import EditableTextArea from '../components/EditableTextArea'
import EmailToast from '../components/EmailToast'  

const initialTitle = 'Digital Transformation'
const initialSubj =
  "In today's fast-paced world, digital transformation is reshaping the way businesses operate and deliver value to customers. It involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It also requires cultural change that challenges the status quo, experiments often, and gets comfortable with failure."

const first20Words = initialSubj.split(' ').slice(0, 20).join(' ') + ' ....'

export default function MainPage() {
  const spanRef = useRef(null)
  const [header, setHeader] = useState(initialTitle)
  const [inputWidth, setInputWidth] = useState(150)
  const [text, setText] = useState(initialSubj)
  const [mode, setMode] = useState('group')

  // Toast states
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 20)
    }
  }, [header])

  const handleHeaderChange = (e) => {
    const value = e.target.value
    const words = value.trim().split(/\s+/)

    if (words.length <= 20 || value.trim() === '') {
      setHeader(value)
    } else {
      setToastMsg('Word limit exceeded! Max 20 words allowed.')
      setToastOpen(true)
    }
  }

  return (
    <div className="bg-white pt-24 pb-18 font-sans">
      <div className="flex flex-row w-[90%] h-[80vh] mx-auto border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <Pagesfacecard initialTitle={initialTitle} first20Words={first20Words} />

        <div className="flex flex-col gap-6 px-8 py-10 w-full overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="relative w-fit">
            <input
              type="text"
              value={header}
              onChange={handleHeaderChange}
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

          <div className="w-full flex flex-row justify-end space-x-1 p-2 bg-white">
            <div className="flex gap-2">
              <div
                onClick={() => setMode('line')}
                className={`group cursor-pointer p-2 border rounded-md transition-all duration-300
                  ${
                    mode === 'line'
                      ? 'border-amber-600 bg-amber-100 shadow-[0_0_3px_2px_rgba(245,158,11,0.5)]'
                      : 'border-amber-400 hover:bg-amber-100 hover:shadow-[0_0_10px_2px_rgba(245,158,11,0.3)]'
                  }`}
              >
                <RowsIcon
                  className={`text-amber-600 transition-transform duration-300 ${
                    mode !== 'line' ? 'group-hover:scale-110 group-hover:-rotate-3' : ''
                  }`}
                />
              </div>

              <div
                onClick={() => setMode('group')}
                className={`group cursor-pointer p-2 border rounded-md transition-all duration-300
                  ${
                    mode === 'group'
                      ? 'border-amber-600 bg-amber-100 shadow-[0_0_3px_2px_rgba(245,158,11,0.5)]'
                      : 'border-amber-400 hover:bg-amber-100 hover:shadow-[0_0_10px_2px_rgba(245,158,11,0.3)]'
                  }`}
              >
                <SquareIcon
                  className={`text-amber-600 transition-transform duration-300 ${
                    mode !== 'group' ? 'group-hover:scale-110 group-hover:-rotate-3' : ''
                  }`}
                />
              </div>
            </div>
          </div>

          {mode === 'line' ? (
            <EditableLineInput initialText={text} onTextChange={setText} />
          ) : (
            <EditableTextArea value={text} onChange={setText} />
          )}

          <div className="fixed bottom-24 right-20 z-50">
            <button className="group bg-amber-600 hover:bg-amber-700 cursor-pointer active:bg-amber-800 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg transition duration-300 ease-in-out">
              <span className="font-medium text-sm">Send</span>
              <PaperPlaneIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Toast Integration */}
      <EmailToast open={toastOpen} setOpen={setToastOpen} message={toastMsg} />
    </div>
  )
}
