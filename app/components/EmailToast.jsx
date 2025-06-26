// EmailToast.js
import * as React from "react";
import { Toast } from "radix-ui";

export default function EmailToast({ open, setOpen, message }) {
	const timerRef = React.useRef(0);

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	React.useEffect(() => {
		if (open) {
			timerRef.current = window.setTimeout(() => {
				setOpen(false);
			}, 3000);
		}
	}, [open]);

	return (
		<Toast.Provider swipeDirection="right">
			<Toast.Root
				className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-md data-[state=open]:animate-slideIn data-[state=closed]:animate-hide"
				open={open}
				onOpenChange={setOpen}
			>
				<Toast.Title className="mb-[5px] text-[15px] font-medium text-red-600">
					Invalid Email
				</Toast.Title>
				<Toast.Description className="text-[13px] text-slate-600">
					{message}
				</Toast.Description>
			</Toast.Root>
			<Toast.Viewport className="fixed bottom-4 right-4 z-50 w-[320px] max-w-[90vw]" />
		</Toast.Provider>
	);
}
