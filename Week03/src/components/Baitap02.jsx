import React, { useEffect, useState } from "react";

function Baitap02() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  return <>
  <div style={{fontSize: 30, color: "red"}}>
   {time.toLocaleTimeString("vi-VN", { hour12: false })}
  </div>
  </>;
}

export default Baitap02;
