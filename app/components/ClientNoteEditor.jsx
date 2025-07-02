import { useEffect, useRef, useState } from "react"
import { useSubmitNote } from "../hooks/useSubmitNote"
import { PaperPlaneIcon, RowsIcon, SquareIcon } from "@radix-ui/react-icons"
import EditableLineInput from "./EditableLineInput"
import EditableTextArea from "./EditableTextArea"
import ToastNotification from "../ui/Toast"

export default function ClientNoteEditor({
  initialTitle,
  initialSubj,
  setTitle,
  setSubject,
  senderEmail,
  receiverEmails,
}) {
  const spanRef = useRef(null)
  const [header, setHeaderLocal] = useState(initialTitle)
  const [inputWidth, setInputWidth] = useState(150)
  const [text, setTextLocal] = useState(initialSubj)
  const [mode, setMode] = useState('group')
  const [toastOpen, setToastOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const { submitNote, loading, error } = useSubmitNote()
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth + 20)
    }
    setTitle(header)
  }, [header])

  useEffect(() => {
    setSubject(text)
  }, [text])

  const handleSend = async () => {
    setToastMsg('')
    setSent(false)
    setToastOpen(true)

    const result = await submitNote(text, senderEmail, receiverEmails)

    if (result) {
      setToastMsg('Sent successfully!')
      setSent(true)
    } else {
      setToastMsg(error || 'Failed to send note.')
      setSent(true)
    }
  }

  const handleHeaderChange = (e) => {
    const value = e.target.value
    const words = value.trim().split(/\s+/)
    if (words.length <= 20 || value.trim() === '') {
      setHeaderLocal(value)
    } else {
      setToastMsg('Word limit exceeded! Max 20 words allowed.')
      setToastOpen(true)
    }
  }

  return (
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

      {/* Mode switch buttons */}
      <div className="w-full flex flex-row justify-end space-x-1 p-2 bg-white">
        <div className="flex gap-2">
          {/* Line mode */}
          <div
            onClick={() => setMode('line')}
            className={`group cursor-pointer p-2 border rounded-md transition-all duration-300 ${
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
          {/* Group mode */}
          <div
            onClick={() => setMode('group')}
            className={`group cursor-pointer p-2 border rounded-md transition-all duration-300 ${
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
        <EditableLineInput initialText={text} onTextChange={setTextLocal} />
      ) : (
        <EditableTextArea value={text} onChange={setTextLocal} />
      )}

      <div className="fixed bottom-24 right-20 z-50">
        <button
          onClick={handleSend}
          className="group bg-amber-600 hover:bg-amber-700 cursor-pointer active:bg-amber-800 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg transition duration-300 ease-in-out"
        >
          <span className="font-medium text-sm">
            {loading ? 'Sending...' : 'Send'}
          </span>
          <PaperPlaneIcon
            className={`w-4 h-4 transform transition-transform duration-300 ${
              loading ? 'animate-pulse' : 'group-hover:-translate-y-1 group-hover:translate-x-1'
            }`}
          />
        </button>
      </div>

      <ToastNotification
        open={toastOpen}
        setOpen={setToastOpen}
        message={toastMsg}
        type={loading ? 'loading' : 'standard'}
        done={!loading}
      />
    </div>
  )
}
