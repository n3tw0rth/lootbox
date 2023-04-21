import React from "react";

function Body({ res }: { res: any }) {
  return (
    <>
      <div className="w-full h-full">
        <pre>{JSON.stringify(res, undefined, 2)}</pre>
      </div>
    </>
  );
}

export default Body;
