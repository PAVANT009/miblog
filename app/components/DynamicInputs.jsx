import { Cross2Icon, MinusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Toast from "./EmailToast.jsx"; 

function DynamicInputs() {
	const [inputs, setInputs] = useState([]);
	const [currentInput, setCurrentInput] = useState("");
	const [toastOpen, setToastOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	const chipColors = [
		"#3DD68C", "#FFFF57", "#57C7FF", "#FFA657", "#FF57A6",
		"#A457FF", "#57FFCA", "#FFD157", "#5EFFE7",
	];

	const isValidEmail = (email) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const handleKeyDown = (e) => {
		if ((e.key === "Enter" || e.key === ",") && currentInput.trim() !== "") {
			e.preventDefault();
			const trimmed = currentInput.trim();
			if (!isValidEmail(trimmed)) {
				setToastMessage(`"${trimmed}" is not a valid email.`);
				setToastOpen(true);
				return;
			}
			if (!inputs.includes(trimmed)) {
				setInputs([...inputs, trimmed]);
			}
			setCurrentInput("");
		}
	};

	const removeInput = (index) => {
		const updated = [...inputs];
		updated.splice(index, 1);
		setInputs(updated);
	};

	return (
		<>
			<div className="max-h-40 overflow-y-auto flex flex-wrap gap-2 pr-1">
				{inputs.map((value, index) => {
					const bgColor = chipColors[index % chipColors.length];
					const textColor = bgColor === "#FFFF57" ? "text-black" : "text-white";

					return (
						<div
							key={index}
							className={`flex items-center px-3 py-1 rounded-md text-sm ${textColor}`}
							style={{ backgroundColor: bgColor }}
						>
							{value}
							<button
								onClick={() => removeInput(index)}
								className="ml-2 hover:opacity-70"
								title="Remove"
							>
								<div className="relative w-5 h-5 group/icon">
									<MinusIcon className="absolute inset-0 w-5 h-5 group-hover/icon:opacity-0 transition-opacity" />
									<Cross2Icon className="absolute inset-0 w-5 h-5 opacity-0 group-hover/icon:opacity-100 transition-opacity" />
								</div>
							</button>
						</div>
					);
				})}

				<input
					type="text"
					value={currentInput}
					onChange={(e) => setCurrentInput(e.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Enter email..."
					className="bg-transparent text-sm outline-none min-w-[140px] placeholder:text-gray-400"
				/>
			</div>

			{/* Toast notification */}
			<Toast open={toastOpen} setOpen={setToastOpen} message={toastMessage} />
		</>
	);
}

export default DynamicInputs;
