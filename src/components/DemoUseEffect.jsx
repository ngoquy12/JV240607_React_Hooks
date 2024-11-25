import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");

  // Tạo 1 mảng các tab, khi click vào tab nào thi tab đó sẽ được active

  console.log("Mouted");

  //   Trường hợp đầu tiên: useEffect(callback)
  //   useEffect(() => {
  //     document.title = title;
  //   });

  //   Trường hợp 2: useEffect(callback, [])
  //   useEffect(() => {
  //     console.log("Callback được gọi");
  //   }, []);

  // Trường hợp 3: useEffect(callback, [deps])
  //   useEffect(() => {
  //     console.log("Callback được gọi trường hợp 3");
  //   }, [title, email]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      console.log("Chạy setTimeout");
    }, 1000);

    // cleanup function
    return () => clearInterval(timeoutId);
  }, []);

  return (
    <div>
      {console.log("Thêm element vào DOM")}

      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />

      <h3>DemoUseEffect</h3>
    </div>
  );
}
