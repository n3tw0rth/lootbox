import React from "react";

import Menu from "@/components/Menu"

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#00B295]">
        <div className="mx-auto flex h-auto w-2/3 flex-col pt-36">
          <div className="h-10 w-full">
            <Menu selected={"text"}/>
          </div>
        </div>
      </div>
    </>
  );
}
