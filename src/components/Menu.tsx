"use client";

import React from "react";
import { Menu } from "@headlessui/react";

let methods: string[] = [""];

function MenuComponent() {
  return (
    <Menu>
      <Menu.Button className={`h-full w-36 rounded-tl-md bg-white text-start`}>More</Menu.Button>
      <Menu.Items className="flex flex-col">
        <Menu.Item className="h-8 w-36 bg-white">
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/account-settings">
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item className="h-8 w-36 bg-white">
          {({ active }) => (
            <a className={`${active && "bg-blue-500"}`} href="/account-settings">
              Documentation
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MenuComponent;
