"use client";

import React, { useEffect, useState } from "react";

import Menu from "@/components/Menu";
import URLInputComponent from "@/components/URLInputComponent";
import URLTokenizer from "@/components/URLTokenizer";
import axios from "axios";

import { useURLInput, useFetchResult, useMethod, useError } from "@/app/store";
import { tabstyles } from "@/app/const";
import View from "./reponse/View";
import Toast from "./Toast";
import Pending from "./Pending";

function MenuComponent() {
  const [currentResponseTab, setcurrentResponseTab] = useState("body");
  const [currentRequestTab, setcurrentRequestTab] = useState("params");
  const [showPending, setshowPending] = useState(false);

  let method: string = useMethod((state) => state.method);
  let url: string = useURLInput((state) => state.url);

  const handleSend = async () => {
    if (method === "Method") {
      return useError.setState({ error: "Please select a Method", visibility: true });
    }
    let res: any = await axios({
      method,
      url,
    }).then((res) => {
      useFetchResult.setState({ res: res });
    });

    localStorage.url = url;
    localStorage.method = method;

    //let res: any = { time: { updated: "Apr 24, 2023 04:45:00 UTC", updatedISO: "2023-04-24T04:45:00+00:00", updateduk: "Apr 24, 2023 at 05:45 BST" }, disclaimer: "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org", chartName: "Bitcoin", bpi: { USD: { code: "USD", symbol: "&#36;", rate: "27,725.8064", description: "United States Dollar", rate_float: 27725.8064 }, GBP: { code: "GBP", symbol: "&pound;", rate: "23,167.4620", description: "British Pound Sterling", rate_float: 23167.462 }, EUR: { code: "EUR", symbol: "&euro;", rate: "27,008.9834", description: "Euro", rate_float: 27008.9834 } } };
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      useURLInput.setState({ url: localStorage.url || "" });
      useMethod.setState({ method: localStorage.method || "Method" });
    }
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-[#00B295]">
        <Toast />
        <Pending show={showPending} />
        <div className="mx-auto flex h-auto w-2/3 flex-col pt-24">
          <URLTokenizer url={useURLInput((state) => state.url)} />

          <div className="h-12 w-full flex z-30">
            <div>
              <Menu selected={"Method"} />
            </div>
            <URLInputComponent />
            <button onClick={handleSend} className="ml-5 w-24 h-full rounded-sm bg-blue-600 text-cyan-300  font-semibold ">
              Send
            </button>
          </div>
          {/*Configuration */}
          <div className="w-full mt-5 bg-white z-10">
            <div className="text-sm font-medium text-center text-black border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2" onClick={() => setcurrentRequestTab("params")}>
                  <a href="#" className={`${currentRequestTab === "params" ? tabstyles.selected : tabstyles.normal}`}>
                    Params
                  </a>
                </li>
                <li className="mr-2" onClick={() => setcurrentRequestTab("auth")}>
                  <a href="#" className={`${currentRequestTab === "auth" ? tabstyles.selected : tabstyles.normal}`} aria-current="page">
                    Authorization
                  </a>
                </li>
                <li className="mr-2" onClick={() => setcurrentRequestTab("headers")}>
                  <a href="#" className={`${currentRequestTab === "headers" ? tabstyles.selected : tabstyles.normal}`}>
                    Headers
                  </a>
                </li>
                <li className="mr-2" onClick={() => setcurrentRequestTab("body")}>
                  <a href="#" className={`${currentRequestTab === "body" ? tabstyles.selected : tabstyles.normal}`}>
                    Body
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full h-32 bg-white"></div>
          </div>

          {/*response display*/}
          <div className="w-full mt-1 bg-white">
            <div className="text-sm font-medium text-center text-black border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2" onClick={() => setcurrentResponseTab("body")}>
                  <a href="#" className={`${currentResponseTab === "body" ? tabstyles.selected : tabstyles.normal}`}>
                    Body
                  </a>
                </li>

                <li className="mr-2" onClick={() => setcurrentResponseTab("headers")}>
                  <a href="#" className={`${currentResponseTab === "headers" ? tabstyles.selected : tabstyles.normal}`}>
                    Headers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full h-96 bg-white">{<View tab={currentResponseTab} res={useFetchResult((state) => state.res)} />}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuComponent;
