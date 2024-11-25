import React, { useState } from "react";

export default function Tabs() {
  const tabs = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Contact",
    },
    {
      id: 4,
      title: "Login",
    },
  ];

  const [indexActive, setIndexActive] = useState(1);

  console.log("indexActive: ", indexActive);

  const handleActiveIndex = (tab) => {
    setIndexActive(tab);
  };
  return (
    <>
      <div style={{ display: "flex", gap: 12 }}>
        {tabs.map((tab, index) => (
          <div
            className={`${indexActive === tab.id ? "active" : ""}`}
            onClick={() => handleActiveIndex(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </>
  );
}
