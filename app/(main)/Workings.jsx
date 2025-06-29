"use client";

import AutoDemoTextArea from "@/app/components/AutoDemoTextarea";
import Card from "../components/Card";
import EmailDemoStatic from "../components/EmailDemoStatic";
import OrbitCard from "../components/OrbitCard";
import GetStartedBtn from "../ui/GetStartedBtn";

export default function Workings() {
  return (
    <div className="mt-2">
      <div className="w-full mx-auto text-center justify-center h-12 rounded-2xl">
        <span className="bg-white rounded-2xl text-[13px] border-white px-2 py-1 inline-flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>flow--connection</title>

            <rect x="6" y="4" width="6" height="6" fill="#4F46E5" />

            <path
              d="M28,18H22a2.0023,2.0023,0,0,0-2,2v2H14.4141L10,17.5859V12h2a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4v6a2.0023,2.0023,0,0,0,2,2H8v5.5859L3.293,22.293a.9994.9994,0,0,0,0,1.414l5,5a.9995.9995,0,0,0,1.414,0L14.4141,24H20v2a2.0023,2.0023,0,0,0,2,2h6a2.0023,2.0023,0,0,0,2-2V20A2.0023,2.0023,0,0,0,28,18ZM9,26.5859,5.4141,23,9,19.4141,12.5859,23ZM22,26V20h6v6Z"
              fill="black"
            />
            </svg>
              How it works
            </span>

      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl text-black font-bold">Write it. Send it. Done.</h1>
        <h1 className="text-center text-gray-400 break-words my-3 whitespace-normal w-[50%]">
          Effortless note sharing for business and individuals, powerful solutions for fast-growing modern companies.
        </h1>
        <GetStartedBtn/>
      </div>
      <div className="items-center justify-center mt-6 flex flex-row gap-5">
        <Card heading={"Connect your email"} number={"01"}>
          <OrbitCard/>
        </Card>
        <Card heading={"Who are you emailing?"} number={"02"}>
          <EmailDemoStatic/>
        </Card>
        <Card heading={"Deliver Your Notes"} number={"03"}>
          <AutoDemoTextArea/>
        </Card>
      </div>
    </div>
  );
}
