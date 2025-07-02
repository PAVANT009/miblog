// app/components/Pagesfacecard.jsx 

import Image from 'next/image'
import face from '@/public/images/face.jpg'
import DynamicInputs from './DynamicInputs'
import { useEffect, useState } from "react"


export default function Pagesfacecard({ initialTitle, subject, session, setToEmails }) {
    const [emails, setEmails] = useState([])

    useEffect(() => {
      setToEmails && setToEmails(emails)
    }, [emails])

    if (!session) {
      return <p className="text-center mt-10">You must be logged in to view this.</p>
    }
  
    const first20Words = subject?.split(' ').slice(0, 20).join(' ') + ' ....'
  
    return (
      <div className="w-[30%] bg-gradient-to-br from-gray-100 to-gray-200 px-10 py-12 border-r border-gray-300">
        <Image
          alt="face-icon"
          src={face}
          className="w-[60px] h-[60px] rounded-full mb-4"
        />
        <h2 className="text-sm text-gray-500 mb-1 capitalize tracking-wide">
          {session.user.name}
        </h2>
        <h2 className="text-amber-600 bg-amber-200 rounded-md px-3 py-1">
          {session.user.email}
        </h2>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          {initialTitle}
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          {first20Words}
        </p>
        <div className="w-full min-h-[12.5rem] resize-none p-4 mt-7 rounded-md bg-amber-50 outline-none focus-within:ring-2 focus-within:ring-amber-200 transition-all duration-200">
          <DynamicInputs setEmails={setEmails} />
        </div>
      </div>
    )
  }
  