import { getFretboardNotes } from "../lib/notes";
import "./css/fretboard.css";

export default function Fretboard({ scale, accidental = 0, rotated = false }) {
  const notes = getFretboardNotes();
  const names = scale.map((note) => note.name[accidental]);

  return (
    <main>
      <div className="fretboard">
        {notes.map((note, index) => {
          const name = note.name[accidental];
          let inScale = names.find((n) => n === name);

          if (scale.length === 0) inScale = true;

          return (
            <div
              key={index}
              className={`
                ${inScale ? "note" : "note faded-note"}
                ${rotated ? "rotated" : ""}`}
            >
              {name}
            </div>
          );
        })}
      </div>
    </main>
  );
}
