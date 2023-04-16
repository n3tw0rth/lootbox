"use client";

import React, { use } from "react";
import { Menu } from "@headlessui/react";

import { useMethod } from "@/app/store";

let methods: string[] = ["GET", "POST"];

type Props = {
  selected: string;
};

function MenuComponent({ selected }: Props) {
  return (
    <Menu>
      <Menu.Button className={`h-full w-36 rounded-l-md bg-white text-start pl-5 font-semibold flex justify-between items-center`}>{useMethod(state=>state.method)}
      <span>x</span></Menu.Button>
      <Menu.Items className="flex flex-col mt-1">
        {methods.map((item) => {
          return (
            <>
              <Menu.Item className="h-8 w-36 bg-white" onClick={()=>useMethod.setState({method: item })}>
                  <span className={`pl-5`}>
                    {item}
                  </span>
              </Menu.Item>
            </>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default MenuComponent;
