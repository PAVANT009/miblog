// ui/svg/PlusLine.jsx
export default function PlusLine() {
  return (
    <div className="w-full h-12  bg-[#F4F4F4] flex items-center justify-center relative">
      <div className="w-full h-[2px] bg-gray-200 absolute top-1/2 left-0 -translate-y-1/2" />

      <div className="absolute left-[9%] bg-[#F4F4F4] z-10 -translate-x-1/2  rounded-full w-8 h-6  flex items-center justify-center text-gray-300 text-3xl ">
        +
      </div>

      <div className="absolute left-[91%] bg-[#F4F4F4] z-10 -translate-x-1/2  rounded-full w-8 h-6 flex items-center justify-center text-gray-300 text-3xl ">
        +
      </div>
    </div>
  );
}
