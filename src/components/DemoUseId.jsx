import React, { useId } from "react";

export default function DemoUseId() {
  const firstId = useId();
  const secondtId = useId();

  console.log(firstId);

  return (
    <div>
      <label htmlFor={firstId}>Email</label>
      <input type="text" id={firstId} />

      <label htmlFor={secondtId}>Password</label>
      <input type="text" id={secondtId} />
    </div>
  );
}
