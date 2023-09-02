"use client";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { UUID } from "crypto";
import { useDraggable } from "@dnd-kit/core";

export class Note {
  readonly id: UUID = uuidV4() as UUID;
  noteContent: string;

  constructor(noteContent?: string) {
    this.noteContent = noteContent || "";
  }
}

export default function NoteItem(props: { note: Note }) {
  const [note, setNote] = useState(props.note);
  const [isModifiable, setIsModifiable] = useState(() => false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: note.id,
  });

  props.note ||= new Note();

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="border border-blue rounded m-2 p-2 text-sm"
    >
      {props.note.noteContent || "note content here.."}
    </div>
  );
}
