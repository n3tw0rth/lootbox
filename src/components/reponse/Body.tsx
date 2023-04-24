import React, { useEffect } from "react";

function Body({ res }: { res: any }) {
  return (
    <>
      <div className="w-full h-full">
        <TraverseObject obj={res} />
      </div>
    </>
  );
}

function TraverseObject({ obj }: { obj: any }) {
  let level: number = 0;
  let objectMap: any = {};
}

export default Body;
