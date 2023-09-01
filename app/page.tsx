"use client";

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { UUID } from "crypto";

import NoteItem, { Note } from "@/components/NoteItem";
import NoteColumnItem, { NoteColumn } from "@/components/NoteColumnItem";

const Notes = new Map<UUID, string>();

class notesState {
  allNotes: Map<UUID, Note> = new Map<UUID, Note>();
  noteColumns: NoteColumn[];

  constructor(noteColumns?: NoteColumn[]) {
    this.noteColumns = noteColumns || [];
  }
}

// const Notes = new Map<string, Note>();

// interface noteColumn {
//   title: string;
//   notesID: UUID[];
// }

// const notesState = {
//   noteColumns: [],
// };

// Notes.set("hello", new Note("world"));

function getNotesState() {
  return new notesState();
}

export default function Home() {
  const [notesState, setNotesState] = useState(getNotesState());

  return (
    <>
      <h1>habit Trackr</h1>

      <DndContext
        onDragStart={(event) => {
          console.log(event);
        }}
        onDragEnd={(event) => {
          console.log(event);
        }}
      >
        <div className="border border-blue rounded flex mx-20">
          <NoteColumnItem noteColumn={new NoteColumn("Note Col 1")}>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 2")}>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 3")}>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 4")}>
            <NoteItem note={new Note()} />
          </NoteColumnItem>
        </div>
      </DndContext>
    </>
  );
}

export { Notes };
