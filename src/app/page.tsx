"use client";

import React, { useRef } from "react";

import Menu from "@/components/Menu";

export default function Home() {
  let urlInputRef = useRef();
  return (
    <>
      <div className="h-screen w-screen bg-[#00B295]">
        <div className="mx-auto flex h-auto w-2/3 flex-col pt-36">
          <div className="h-12 w-full flex">
            <div>
              <Menu selected={"Method"} />
            </div>
            <input ref={urlInputRef} type="text" className="w-full h-full border-0 border-l-[1px] pl-5 outline-none  hover:bg-gray-200" placeholder="Enter the URL or paste the text" />
            <button className="ml-5 w-24 h-full rounded-sm bg-blue-600 text-cyan-300  font-semibold ">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
