import React, { useEffect, useRef, useState } from "react";

export default function DemoUseRef() {
  const inputRef = useRef(null);
  const headingRef = useRef(null);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log("re-render");

  //   useEffect(() => {
  //     setInterval(() => {
  //       setTime((prev) => prev + 1);
  //     }, 1000);

  //     // Hủy sự kiện
  //   }, []);

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h3>DemoUseRef</h3>
      <input type="text" ref={inputRef} />
      <h3 ref={headingRef}>Heading 3</h3>
      {/* <button onClick={() => setCount(count + 1)}>Count</button> */}

      <h3>Time: {time}</h3>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
