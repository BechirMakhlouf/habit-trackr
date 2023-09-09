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
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

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
  return new notesState([
    new NoteColumn("1"),
    new NoteColumn("2"),
    new NoteColumn("3"),
    new NoteColumn("4"),
  ]);
}

function handleDragEnd(event: DragOverEvent) {
  const { active, over } = event;

  if (active.id === over?.id) {
    return;
  }

  setNoteColumn(
    () => {
      const oldIndex = noteColumn.notes.findIndex((note) =>
        active.id === note.id
      );
      const newIndex = noteColumn.notes.findIndex((note) =>
        over?.id === note.id
      );

      return new NoteColumn(
        noteColumn.name,
        arrayMove(noteColumn.notes, oldIndex, newIndex),
      );
    },
  );
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
        onDragEnd={handleDragEnd}
      >
        <div className="border border-blue rounded-xl flex p-6 mx-20">
          {notesState.noteColumns.map((noteColumn) => (
            <NoteColumnItem noteColumn={noteColumn} />
          ))}
        </div>
      </DndContext>
    </>
  );
}

export { Notes };
