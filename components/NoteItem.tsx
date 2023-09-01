import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { randomUUID, UUID } from "crypto";
import { useDraggable} from "@dnd-kit/core";

export class Note {
  id: UUID = uuidV4() as UUID;
  noteContent: string;

  constructor(noteContent?: string) {
    this.noteContent = noteContent || "";
  }
}

export default function NoteItem(props: { note?: Note }) {
  const [isModifiable, setIsModifiable] = useState(() => false);
  props.note ||= new Note();

  return (
    <p className="border border-blue rounded m-2 p-2 text-">
      {props.note.noteContent || "note content here.."}
    </p>
  );
}
