import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Btn from "./Btn";

function App() {
  const [color, setColor] = useState("black");

  const colorChange = (clr) => {
    setColor(clr);
  };

  return (
    <>
      <div style={{ backgroundColor: color}}>
        <Btn btnName="BLUE" colorName="blue" colorChange={colorChange} />
        <Btn btnName="RED" colorName="red" colorChange={colorChange} />
        <Btn btnName="YELLOW" colorName="yellow" colorChange={colorChange} />
        <Btn btnName="GREEN" colorName="green" colorChange={colorChange} />
      </div>
    </>
  );
}

export default App;
