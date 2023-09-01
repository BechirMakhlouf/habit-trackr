"use client";
import NoteItem, { Note } from "./NoteItem";
import { PropsWithChildren, useState } from "react";
import { UUID } from "crypto";
import { v4 as uuidV4 } from "uuid";
import { useDroppable } from "@dnd-kit/core";

export class NoteColumn {
  readonly id: UUID = uuidV4() as UUID;
  name: string;
  notes: Note[];

  constructor(name: string, notes?: Note[]) {
    this.name = name;
    this.notes = notes || [];
  }
}

interface NoteColumnProps extends PropsWithChildren {
  noteColumn: NoteColumn;
}

const NoteColumnItem = (props: NoteColumnProps) => {
  const [noteColumn, setNoteColumn] = useState(props.noteColumn);
  const { isOver, setNodeRef } = useDroppable({
    id: noteColumn.id,
  });
  return (
    <div
      ref={setNodeRef}
      className=" w-full m-2 flex-col rounded border border-blue"
    >
      <h3 className="w-full text-center">
        {props.noteColumn?.name || "Note Column"}
      </h3>
      {props.children}
      {noteColumn?.notes.map((note) => <NoteItem note={note} key={note.id} />)}

      <hr />
      <button
        onClick={() => {
          const updatedNoteColumn = new NoteColumn(noteColumn.name, [
            ...noteColumn.notes,
            new Note(),
          ]);
          setNoteColumn(updatedNoteColumn);
        }}
        className="text-gray-100"
      >
        add note..
      </button>
    </div>
  );
};

export default NoteColumnItem;
