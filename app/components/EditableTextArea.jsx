'use client'

import React from 'react'

export default function EditableTextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2  outline-none  "
      rows={25}
      style={{ resize: 'none', whiteSpace: 'pre-wrap' }}
      placeholder="Type here..."
    />
  )
}
