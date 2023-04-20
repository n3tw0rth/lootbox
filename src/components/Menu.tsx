"use client";

import React, { useState } from "react";

import { useMethod } from "@/app/store";

let methods: string[] = ["GET", "POST"];

type Props = {
  selected: string;
};

function MenuComponent({ selected }: Props) {
  const [showDropDown, setshowDropDown] = useState(false);

  return (
    <div className="h-full">
      <div onClick={() => setshowDropDown(true)} className={`h-full w-36 rounded-l-sm bg-white text-start px-5 font-semibold flex justify-between items-center`}>
        {useMethod((state) => state.method)}
        <span
          onClick={() => {
            useMethod.setState({ method: "Method" });
          }}
        >
          x
        </span>
      </div>
      <div className={`${showDropDown ? "block" : "hidden"} flex flex-col mt-1 h-auto w-36 shadow-xl`}>
        <span className="py-1 bg-white"></span>
        {methods.map((item) => {
          return (
            <>
              <div
                className={`pl-5 w-36 bg-white py-1`}
                onClick={() => {
                  useMethod.setState({ method: item });
                  setshowDropDown(false);
                }}
              >
                {item}
              </div>
            </>
          );
        })}
        <span className="py-1 bg-white"></span>
      </div>
    </div>
  );
}

export default MenuComponent;
