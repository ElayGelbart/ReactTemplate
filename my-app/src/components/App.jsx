import React, { useState } from "react";
import DrumPad from "./DrumPad";

export default function App(props) {
  const [KeyTriggerd, setKeyTriggerd] = useState(null);

  function displayKey(key) {
    setKeyTriggerd(key);
  }

  return (
    <div
      id="drum-machine"
      onKeyPress={(e) => {
      }}
    >
      <div id="display">{KeyTriggerd}</div>
      <DrumPad keypad="Q" setKeyFunc={displayKey} />
      <DrumPad keypad="W" setKeyFunc={displayKey} />
      <DrumPad keypad="E" setKeyFunc={displayKey} />
      <DrumPad keypad="A" setKeyFunc={displayKey} />
      <DrumPad keypad="S" setKeyFunc={displayKey} />
      <DrumPad keypad="D" setKeyFunc={displayKey} />
      <DrumPad keypad="Z" setKeyFunc={displayKey} />
      <DrumPad keypad="X" setKeyFunc={displayKey} />
      <DrumPad keypad="C" setKeyFunc={displayKey} />
    </div>
  );
}
