// components/AppFrame.jsx
export default function AppFrame({ children }) {
  return (
    <div className="bg-[#F4F4F4] min-h-screen p-0 m-0">
      <div className="border-x-2 mx-32 border-gray-200 min-h-screen relative">
        {children}
      </div>
    </div>
  );
}
