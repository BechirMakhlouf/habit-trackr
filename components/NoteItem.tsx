"use client";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { UUID } from "crypto";
import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export class Note {
  readonly id: UUID = uuidV4() as UUID;
  noteContent: string;

  constructor(noteContent?: string) {
    this.noteContent = noteContent || "";
  }
}

export default function NoteItem(props: { note: Note; dragHandle?: boolean }) {
  const [note, setNote] = useState(props.note);
  const [isModifiable, setIsModifiable] = useState(() => false);
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: note.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    CSSTransition,
  };
  props.note ||= new Note();

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="border border-blue rounded m-2 p-2 text-sm"
    >
      {props.note.noteContent || "note content here.."}
      <h3 {...listeners}>handle</h3>
    </div>
  );
}
