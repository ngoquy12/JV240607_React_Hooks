import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OnewayAndTwowayDatabinding from "./components/OnewayAndTwoWayDatabinding";
import DemoUseEffect from "./components/DemoUseEffect";
import Tabs from "./components/Tabs";
import DemoUseReducer from "./components/DemoUseReducer";
import ParentComponent from "./components/ParentComponent";
import GlobalState from "./providers/GlobalState";
import DemoUseRef from "./components/DemoUseRef";
import DemoUseId from "./components/DemoUseId";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      {/* <OnewayAndTwowayDatabinding /> */}
      <button onClick={handleToggle}>Toggle</button>
      {/* {isShow === true ? <DemoUseEffect /> : <></>} */}

      {/* {isShow ? <DemoUseEffect /> : <></>} */}

      {isShow && <DemoUseEffect />}

      {/* <Tabs /> */}

      {/* <DemoUseReducer /> */}
      {/* <GlobalState /> */}

      {/* <DemoUseRef /> */}

      <DemoUseId />
    </>
  );
}

export default App;
