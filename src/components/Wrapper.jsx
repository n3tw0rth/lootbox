"use client";

import React, { use } from "react";

import Menu from "@/components/Menu";
import URLInputComponent from "@/components/URLInputComponent";
import URLTokenizer from "@/components/URLTokenizer";

import { useURLInput } from "@/app/store";

function MenuComponent() {
  return (
    <div className="h-screen w-screen bg-[#00B295]">
      <div className="mx-auto flex h-auto w-2/3 flex-col pt-36">
        <URLTokenizer url={useURLInput((state) => state.url)} />

        <div className="h-12 w-full flex">
          <div>
            <Menu selected={"Method"} />
          </div>
          <URLInputComponent />
          <button className="ml-5 w-24 h-full rounded-sm bg-blue-600 text-cyan-300  font-semibold ">Send</button>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
