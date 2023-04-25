import React, { useEffect, useState } from "react";

function Body({ res }: { res: any }) {
  const [previewoption, setpreviewoption] = useState("pretty");

  return (
    <>
      <div className={`w-full h-full ${previewoption == "pretty" ? "overflow-scroll" : "break-words overflow-y-scroll"}`}>
        <div className="w-full h-10 flex items-center justify-start">
          <button onClick={() => setpreviewoption("pretty")} className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">
            Prettify
          </button>
          <button onClick={() => setpreviewoption("raw")} className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">
            Raw
          </button>
        </div>

        <pre className={`${previewoption == "pretty" ? "block" : "hidden"}`}>{JSON.stringify(res, null, 3)}</pre>
        <span className={`${previewoption == "raw" ? "block" : "hidden"}`}>{JSON.stringify(res, null, 2)}</span>
      </div>
    </>
  );
}

export default Body;
