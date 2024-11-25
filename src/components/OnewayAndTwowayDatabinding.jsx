import React, { useState } from "react";

export default function OnewayAndTwowayDatabinding() {
  const [email, setEmail] = useState("");

  const handleChangeValue = () => {
    setEmail("nva@gmail.com");
  };
  return (
    <>
      <h3>Email value: {email}</h3>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleChangeValue}>Change value</button>
    </>
  );
}
