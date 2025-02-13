import { getNotes, getRepeatedNotes } from "./notes";

let scales = new Map();

scales.set("major", [2, 2, 1, 2, 2, 2, 1]);
scales.set("dorian", [2, 1, 2, 2, 2, 1, 2]);
scales.set("phrygian", [1, 2, 2, 2, 1, 2, 2]);
scales.set("natural minor", [2, 1, 2, 2, 1, 2, 2]);
scales.set("harmonic minor", [2, 1, 2, 2, 1, 3, 1]);
scales.set("melodic minor", [2, 1, 2, 2, 2, 2, 1]);
scales.set("major pentatonic", [2, 2, 3, 2, 3]);
scales.set("minor pentatonic", [3, 2, 2, 3, 2]);
scales.set("blues", [3, 2, 1, 1, 3, 2]);

export function getScale(noteName, type) {
  const notes = getRepeatedNotes();

  // get index
  let index;
  let count = -1;

  for (let i = 0; i < notes.length; ++i) {
    count++;

    if (notes[i].name.includes(noteName)) {
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
  let names = new Set();
  let scaleNames = new Set();

  for (let [key, _] of scales) {
    let name = key
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");

    names.add(name);
  }

  notes.map((note) => {
    names.forEach((name) => {
      scaleNames.add(note.name[0] + " " + name);
      scaleNames.add(note.name[1] + " " + name);
    });
  });

  return scaleNames;
}
