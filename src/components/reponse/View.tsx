import React from "react";
import Body from "./Body";
import Headers from "./Headers";

function View({ tab, res }: { tab: string; res: any }) {
  return (
    <>
      {tab == "body" ? <Body res={res.data} /> : <></>}
      {tab == "headers" ? <Headers res={res.headers} /> : <></>}
    </>
  );
}

export default View;
