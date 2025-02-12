import { getNotes, getRepeatedNotes } from "./notes";

let scales = new Map();

scales.set("major", [2, 2, 1, 2, 2, 2, 1]);
scales.set("natural minor", [2, 1, 2, 2, 1, 2, 2]);
scales.set("harmonic minor", [2, 1, 2, 2, 1, 3, 1]);
scales.set("melodic minor", [2, 1, 2, 2, 2, 2, 1]);

export function getScale(noteName, type) {
  const notes = getRepeatedNotes();

  // get index
  let index;
  let count = -1;

  for (let i = 0; i < notes.length; ++i) {
    count++;

    if (notes[i].name[0] === noteName) {
      index = count;
      break;
    }
  }

  // get scale notes
  let scale = [];
  const intervals = scales.get(type.toLowerCase());

  scale.push(notes[index]);

  intervals.map((interval) => {
    index += interval;
    scale.push(notes[index]);
  });

  return scale;
}

export function getScaleNames() {
  const notes = getNotes();
  const names = ["Major", "Natural Minor", "Harmonic Minor", "Melodic Minor"];
  let scaleNames = new Set();

  notes.map((note) => {
    names.map((name) => {
      scaleNames.add(note.name[0] + " " + name);
      scaleNames.add(note.name[1] + " " + name);
    });
  });

  return scaleNames;
}
