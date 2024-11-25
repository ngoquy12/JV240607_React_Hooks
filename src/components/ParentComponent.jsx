import React from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  return (
    <div>
      <h3>ParentComponent</h3>
      <ChildrenComponent />
    </div>
  );
}
