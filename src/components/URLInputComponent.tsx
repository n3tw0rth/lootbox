"use client";

import * as React from "react";

import { useURLInput } from "@/app/store";

function URLInputComponent() {
  let urlInputRef = React.useRef<HTMLInputElement>(null);

  const handleURLInput = () => {
    if (urlInputRef.current) {
      useURLInput.setState({ url: urlInputRef.current.value });
    }
  };
  return (
    <>
      <input ref={urlInputRef} onChange={handleURLInput} type="text" className="w-full h-full border-0 border-l-[1px] pl-5 outline-none  hover:bg-gray-200 " placeholder="Enter the URL or paste the text" />
    </>
  );
}

export default URLInputComponent;
