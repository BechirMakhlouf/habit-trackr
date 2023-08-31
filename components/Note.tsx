import { useState } from "react";
import { randomUUID, UUID } from "crypto";
import { Note } from "@/app/page";

export default function NoteItem({note: Note = new Note()}) {
  const [isModifiable, setIsModifiable] = useState(() => false);
  return (
    <p className="border border-blue rounded m-2 text-">
      {note?.noteContent || ""}
    </p>
  );
}
