import Fretboard from "./components/Fretboard";
import SearchList from "./components/SearchList";
import { getScale } from "./lib/scales";
import { useState } from "react";
import "./App.css"

function App() {
  const [scale, setScale] = useState([]);

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

  return (
    <div>
      <SearchList
        onSelect={(scale) => {
          handleScaleSelection(scale);
        }}
      />
      <Fretboard scale={scale} />
    </div>
  );
}

export default App
