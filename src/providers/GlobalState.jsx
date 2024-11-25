import React, { useState } from "react";
import ParentComponent from "../components/ParentComponent";

// Bước 1: Tạo ngữ cảnh
export const GlobalContext = React.createContext();

export default function GlobalState() {
  const [userName, setUserName] = useState("Nguyễn Văn A");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    // Bước 2
    <GlobalContext.Provider
      value={{
        userName,
        count,
        handleIncrement,
      }}
    >
      <ParentComponent />
    </GlobalContext.Provider>
  );
}
