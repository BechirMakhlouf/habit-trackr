"use client";

import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { UUID } from "crypto";

import { Note } from "@/components/NoteItem";
import NoteColumnItem, { NoteColumn } from "@/components/NoteColumnItem";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

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
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  return (
    <>
      <h1>habit Trackr</h1>

      <DndContext
        sensors={sensors}
        onDragStart={(event) => {
          console.log(event);
        }}
        onDragEnd={(event) => {
          console.log(event);
        }}
      >
        <div className="border border-blue rounded flex p-6 mx-20">
          <NoteColumnItem noteColumn={new NoteColumn("Note Col 1")} />

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 2")} />

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 3")} />

          <NoteColumnItem noteColumn={new NoteColumn("Not Col 4")} />
        </div>
      </DndContext>
    </>
  );
}

export { Notes };
