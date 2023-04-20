import React from "react";
import Body from "./Body";

function View({ tab, res }: { tab: string; res: any }) {
  return <>{tab == "body" ? <Body /> : <></>}</>;
}

export default View;
