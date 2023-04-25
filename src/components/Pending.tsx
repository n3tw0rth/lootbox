import { useEffect, useState } from "react";

function Pending(show: { show: boolean }) {
  let counter: number = 0;
  let [str, setstr] = useState("Pending");
  useEffect(() => {
    let interval = setInterval(() => {
      if (counter < 3) {
        setstr(str + ".");
      } else {
        setstr("Pending");
        counter = 0;
      }
      counter++;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className={`${show.show ? "block" : "hidden"}`}>{str}</div>
    </>
  );
}

export default Pending;
