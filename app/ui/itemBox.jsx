export default function ItemBox({header,context,Svg}) {
    const r = 3;
    const crcol = "#d1d5db";
  return (
        <div className="flex flex-row gap-2 hover:bg-gray-100 px-1 py-3 rounded-lg">
            <div className="relative flex-shrink-0 bg-gray-50 border-[1px] border-[#d1d5db] h-12 w-12 rounded-lg">
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
                (pos, i) => (
                <svg
                    key={i}
                    className={`absolute ${pos} m-1`}
                    width={r}
                    height={r}
                    viewBox="0 0 15 15"
                >
                    <circle cx="7.5" cy="7.5" r="7.5" fill={crcol} />
                </svg>
                )
            )}
            {Svg}
            </div>
        <div className="flex flex-col justify-center ">
            <h1 className="text-[15px] font-medium leading-tight">{header}</h1>
            <p className="text-[13px] text-gray-500 leading-tight whitespace-nowrap">
                {context}
            </p>
        </div>

        </div>
  )
}