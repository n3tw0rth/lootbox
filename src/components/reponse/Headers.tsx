import React, { useEffect } from "react";

function Headers({ res }: { res: any }) {
  return (
    <>
      <div className="w-full h-full overflow-scroll px-6">
        <div className="w-full h-10 flex items-center justify-start">
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">Prettify</button>
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">Raw</button>
        </div>

        <pre>{JSON.stringify(res, null, 2)}</pre>
      </div>
    </>
  );
}

export default Headers;
