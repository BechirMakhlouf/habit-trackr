"use client";

import { useState } from "react";
import { randomUUID, UUID } from "crypto";
import NoteItem from "@/components/Note";

export class Note {
  id: UUID = randomUUID();
  noteContent: string;

  constructor(noteContent?: string) {
    this.noteContent = noteContent || "";
  }
}

export class NoteColumn {
  id: UUID = randomUUID();
  name: string;
  notes: Note[];

  constructor(name: string, notes?: Note[]) {
    this.name = name;
    this.notes = notes || [];
  }
}

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

      <div className="border border-blue rounded flex mx-20">
        <div className=" w-full m-2 flex-col rounded border border-blue">
          <h3 className="w-full text-center">column name</h3>
          <NoteItem note={new Note()}/>
          <hr />
          <p className="text-gray-100">add note..</p>
        </div>
        <div className="w-full m-2 flex-col rounded border border-blue">
          <NoteItem />
          <p className="border border-blue rounded m-2">note content</p>
        </div>
        <div className="w-full m-2 flex-col rounded border border-blue">
          <h3 className="w-full text-center">column name</h3>
          <NoteItem />
          <p className="border border-blue rounded m-2">note content</p>
        </div>
        <div className="w-full m-2 flex-col rounded border border-blue">
          <h3 className="w-full text-center">column name</h3>
          <NoteItem />
          <p className="border border-blue rounded m-2">note content</p>
        </div>
      </div>
    </>
  );
}

export { Notes };
