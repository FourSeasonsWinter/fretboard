import { useState } from "react";
import "./css/control.css";

export default function Control({ onAccidentalChange, onRotate }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="control">
        {visible && (
          <button
            onClick={() => {
              onAccidentalChange();
            }}
          >
            ♯ / ♭
          </button>
        )}
        <img
          className="settings-icon"
          src="/settings.svg"
          alt="fretboard settings"
          onClick={() => setVisible(!visible)}
        />
        {visible && (
          <button
            onClick={() => {
              onRotate();
            }}
          >
            rotate
          </button>
        )}
      </div>
    </>
  );
}
