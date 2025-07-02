'use client'
import { useState } from 'react'
import Pagesfacecard from '../components/Pagesfacecard'
import Logout from '../components/logout'
import ClientNoteEditor from '../components/ClientNoteEditor'

export default function MainPage({ session }) {
  const [title, setTitle] = useState('Digital Transformation')
  const [subject, setSubject] = useState(
    "In today's fast-paced world, digital transformation is reshaping the way businesses operate and deliver value to customers..."
  )
  const [toEmails, setToEmails] = useState([])

  return (
    <div className="bg-white pt-16 pb-18 font-sans">
      <Logout />
      <div className="flex flex-row w-[90%] h-[80vh] mx-auto border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <Pagesfacecard initialTitle={title} subject={subject} session={session} setToEmails={setToEmails} />
        <ClientNoteEditor
          initialTitle={title}
          initialSubj={subject}
          setTitle={setTitle}
          setSubject={setSubject}
          senderEmail={session?.user?.email}
          receiverEmails={toEmails}
        />
      </div>
    </div>
  )
}
