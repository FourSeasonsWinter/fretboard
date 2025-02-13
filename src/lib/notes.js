const C = { name: ["C", "C"] };
const Db = { name: ["D♭", "C♯"] };
const D = { name: ["D", "D"] };
const Eb = { name: ["E♭", "D♯"] };
const E = { name: ["E", "E"] };
const F = { name: ["F", "F"] };
const Gb = { name: ["G♭", "F♯"] };
const G = { name: ["G", "G"] };
const Ab = { name: ["A♭", "G♯"] };
const A = { name: ["A", "A"] };
const Bb = { name: ["B♭", "A♯"] };
const B = { name: ["B", "B"] };

const first = [E, F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E];
const second = [B, C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B];
const third = [G, Ab, A, Bb, B, C, Db, D, Eb, E, F, Gb, G];
const fourth = [D, Eb, E, F, Gb, G, Ab, A, Bb, B, C, Db, D];
const fifth = [A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab, A];
const sixth = [E, F, Gb, G, Ab, A, Bb, B, C, Db, D, Eb, E];

const notesLength = first.length;
const repeatedNotes = first.concat(first.slice(1));

let loaded = false;
let notes = [];

export function getFretboardNotes() {
  if (!loaded) {
    const strings = [sixth, fifth, fourth, third, second, first];

    for (let i = 0; i < notesLength; ++i) {
      strings.map((string) => {
        notes.push(string[i]);
      });
    }
  }

  loaded = true;
  return notes;
}

export function getNotes() {
  return [C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B];
}

export function getRepeatedNotes() {
  return repeatedNotes;
}
