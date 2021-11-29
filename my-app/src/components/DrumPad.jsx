import React, { useEffect } from "react";
import DrumSound from "../audio/drum.wav";

export default function DrumPad(props) {
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === props.keypad.toUpperCase()) {
        document.getElementById(props.keypad + "Div").click();
      }
    });
  }, []);

  return (
    <div
      className="drum-pad"
      id={props.keypad + "Div"}
      onClick={(e) => {
        e.target.children[0].play();
        props.setKeyFunc(props.keypad);
      }}
    >
      <audio className="clip" id={props.keypad} src={DrumSound}></audio>
      {props.keypad}
    </div>
  );
}
