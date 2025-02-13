import Fretboard from "./components/Fretboard";
import SearchList from "./components/SearchList";
import { getScale } from "./lib/scales";
import { useState } from "react";
import "./App.css"
import Control from "./components/Control";

function App() {
  const [scale, setScale] = useState([]);
  const [accidental, setAccidental] = useState(0);
  const [rotated, setRotated] = useState(false);

  function handleScaleSelection(scaleName) {
    if (scaleName === "") {
      setScale([]);
      return;
    }

    const values = scaleName.split(" ");
    const note = values[0];
    let type = values[1];

    if (values.length > 2) type = type + " " + values[2];

    const scale = getScale(note, type);

    setScale(scale);
  }

  function handleAccidentalChange() {
    setAccidental(accidental === 0 ? 1 : 0)
  }
  
  function handleRotation() {
    setRotated(rotated ? false : true)
  }

  return (
    <div className="page">
      <SearchList
        onSelect={(scale) => {
          handleScaleSelection(scale);
        }}
      />
      <Fretboard scale={scale} accidental={accidental} rotated={rotated} />
      <Control onAccidentalChange={handleAccidentalChange} onRotate={handleRotation} />
    </div>
  );
}

export default App
