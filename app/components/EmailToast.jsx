import React from 'react'
import ToastNotification from '../ui/Toast'

export default function EmailToast({open, setOpen, message}) {
  return (
	<ToastNotification open={open}
	setOpen={setOpen}
	message={message}
	title="Invalid Email"
	type="standard"
	done={true} />
  )
}
