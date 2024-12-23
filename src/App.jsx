import { useState } from "react";
import "./App.css";

export default function App() {
  //using useState with initial values to control the color input and angle with an onChange event handler
  const [colour1, setColour1] = useState("#ff0000");
  const [colour2, setColour2] = useState("#00ff00");
  const [colour3, setColour3] = useState("#0000ff");
  const [angle, setAngle] = useState("45");

  //styling the background with DOM
  document.body.style.background = `linear-gradient(${angle}deg, ${colour1}, ${colour2}, ${colour3})`;

  return (
    <div className="elements-container">
      <div className="input-1">
        <label>Colour One:</label>
        <input
          type="color"
          id="colour-one"
          value={colour1}
          onChange={(e) => setColour1(e.target.value)}
        ></input>
      </div>
      <div className="input-2">
        <label>Colour Two:</label>
        <input
          type="color"
          id="colour-two"
          value={colour2}
          onChange={(e) => setColour2(e.target.value)}
        ></input>
      </div>
      <div className="input-3">
        <label>Colour Three:</label>
        <input
          type="color"
          id="colour-three"
          value={colour3}
          onChange={(e) => setColour3(e.target.value)}
        ></input>
      </div>
      <div className="gradient">
        <label>Angle:</label>
        <input
          type="number"
          id="gradient"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
