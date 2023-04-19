"use client";

import React, { use } from "react";

import Menu from "@/components/Menu";
import URLInputComponent from "@/components/URLInputComponent";
import URLTokenizer from "@/components/URLTokenizer";

import { useURLInput } from "@/app/store";

function MenuComponent() {
  return (
    <div className="h-screen w-screen bg-[#00B295]">
      <div className="mx-auto flex h-auto w-2/3 flex-col pt-24">
        <URLTokenizer url={useURLInput((state) => state.url)} />

        <div className="h-12 w-full flex">
          <div>
            <Menu selected={"Method"} />
          </div>
          <URLInputComponent />
          <button className="ml-5 w-24 h-full rounded-sm bg-blue-600 text-cyan-300  font-semibold ">Send</button>
        </div>
        {/*Configuration */}
        <div className="w-full mt-5 bg-white z-20">
          <div class="text-sm font-medium text-center text-black border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Params
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                  Authorization
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Headers
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Body
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-32 bg-white"></div>
        </div>

        {/*response display*/}
        <div className="w-full mt-1 bg-white">
          <div class="text-sm font-medium text-center text-black border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Body
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">
                  Cookies
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Headers
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Test Results
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full h-96 bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
