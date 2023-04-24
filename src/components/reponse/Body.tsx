import React, { useEffect } from "react";

function Body({ res }: { res: any }) {
  useEffect(() => {
    TraverseObject({ obj: res });
  });
  return (
    <>
      <div className="w-full h-full"></div>
    </>
  );
}

function TraverseObject({ obj }: { obj: any }) {
  let level: number = 0;
  let objectMap: any = {};
}

export default Body;
