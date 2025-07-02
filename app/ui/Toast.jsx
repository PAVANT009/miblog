import * as React from "react";
import { Toast } from "radix-ui";

export default function ToastNotification({
  title = "Notice",
  message = "",
  open,
  setOpen,
  type = "standard",  
  done = false,  
}) {
  const timerRef = React.useRef(0);
  const [spinnerChar, setSpinnerChar] = React.useState("/");

  // Spinner animation
  React.useEffect(() => {
    if (type === "loading" && open && !done) {
      const spinner = ["\\", "|", "/", "-"];
      let i = 0;
      const interval = setInterval(() => {
        setSpinnerChar(spinner[i % spinner.length]);
        i++;
      }, 200);
      return () => clearInterval(interval);
    }
  }, [open, type, done]);

  React.useEffect(() => {
    if (open && (type === "standard" || (type === "loading" && done))) {
      timerRef.current = window.setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [open, type, done]);

  const renderContent = () => {
    if (type === "loading") {
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            {done ? "✅" : spinnerChar}
          </span>
          <span className="text-sm">
            {done ? message || "Completed" : "Loading..."}
          </span>
        </div>
      );
    }

    return (
      <>
        <Toast.Title className="mb-[5px] text-[15px] font-medium text-red-600">
          {title}
        </Toast.Title>
        <Toast.Description className="text-[13px] text-slate-600">
          {message}
        </Toast.Description>
      </>
    );
  };

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="grid items-center gap-y-2 rounded-md bg-white p-4 shadow-md w-full data-[state=open]:animate-slideIn data-[state=closed]:animate-hide"
        open={open}
        onOpenChange={setOpen}
      >
        {renderContent()}

        {type === "loading" && !done && (
          <div className="mt-2 h-1 w-full bg-gray-200 rounded overflow-hidden">
            <div className="h-full bg-blue-500 animate-pulse w-full" />
          </div>
        )}
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-4 right-4 z-50 w-[320px] max-w-[90vw]" />
    </Toast.Provider>
  );
}
