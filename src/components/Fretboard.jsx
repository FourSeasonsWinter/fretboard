import { getFretboardNotes } from "../lib/notes";
import "./css/fretboard.css"

export default function Fretboard({ scale }) {
  const notes = getFretboardNotes();
  const names = scale.map((note) => note.name[0]);

  return (
    <main>
      <div className="fretboard">
        {notes.map((note, index) => {
          const name = note.name[0];
          let inScale = names.find((n) => n === name);

          if (scale.length === 0) inScale = true;

          return (
            <div
              key={index}
              className={
                inScale
                  ? 'note'
                  : 'note faded-note'
              }
            >
              {name}
            </div>
          );
        })}
      </div>
    </main>
  );
}
