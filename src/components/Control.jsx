import "./css/control.css";

export default function Control({ onAccidentalChange, onRotate }) {
  return (
    <div className="control">
      <button
        onClick={() => {
          onAccidentalChange();
        }}
      >
        ♯ / ♭
      </button>
      <button
        onClick={() => {
          onRotate();
        }}
      >
        rotate
      </button>
    </div>
  );
}
