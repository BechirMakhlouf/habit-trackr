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

      <DndContext>
        <div className="border border-blue rounded flex mx-20">
          <NoteColumnItem>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem>
            <NoteItem note={new Note()} />
          </NoteColumnItem>

          <NoteColumnItem>
            <NoteItem note={new Note()} />
          </NoteColumnItem>
        </div>
      </DndContext>
    </>
  );
}

export { Notes };
