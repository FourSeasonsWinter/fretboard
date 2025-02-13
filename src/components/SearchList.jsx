import { useState } from "react";
import { getScaleNames } from "../lib/scales";
import "./css/searchlist.css";

export default function SearchList({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const scaleNames = getScaleNames();

  function handleInputChange(event) {
    const value = event.target.value;

    if (value === "") {
      setResults([]);
      setQuery(value);
      return;
    }

    const filteredResults = [];
    let count = 0;

    scaleNames.forEach((scaleName) => {
      const name = scaleName.replace("♯", "#").replace("♭", "b");
      if (count < 5 && name.toLowerCase().startsWith(value.toLowerCase())) {
        filteredResults.push(scaleName);
        count += 1;
      }
    });

    setQuery(value);
    setResults(filteredResults);
  }

  function handleItemClick(item) {
    setQuery(item);
    setResults([]);
    onSelect(item);
  }

  function handleClearClick() {
    setQuery("");
    setResults([]);
    onSelect("");
  }

  return (
    <div className={"search-list"}>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Scale..."
        />
        {query != "" && <button onClick={() => handleClearClick()}>X</button>}
      </div>
      <ul>
        {results.map((item, index) => {
          return (
            <li key={index} onClick={() => handleItemClick(item)}>
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
