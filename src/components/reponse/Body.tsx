import React, { useEffect } from "react";

let objectMap: any = {};

function Body({ res }: { res: any }) {
  return (
    <>
      <div className="w-full h-full px-6">
        <div className="w-full h-10 flex items-center justify-start">
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">Prettify</button>
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">Raw</button>
        </div>

        <div className="h-full w-full overflow-scroll">
          <pre>{JSON.stringify(res, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}

export default Body;
