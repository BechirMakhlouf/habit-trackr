"use client";
import NoteItem, { Note } from "./NoteItem";
import { useState } from "react";
import { UUID } from "crypto";
import { v4 as uuidV4 } from "uuid";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
export class NoteColumn {
  readonly id: UUID = uuidV4() as UUID;
  name: string;
  notes: Note[];

  constructor(name: string, notes?: Note[]) {
    this.name = name;
    this.notes = notes || [];
  }
}

interface NoteColumnProps {
  noteColumn: NoteColumn;
}

const NoteColumnItem = (props: NoteColumnProps) => {
  const [noteColumn, setNoteColumn] = useState(props.noteColumn);
  const { setNodeRef } = useDroppable({
    id: props.noteColumn.id,
  });

  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter: sortableKeyboardCoordinates,
  //   }),
  // );

  function handleAddNote() {
    const updatedNoteColumn = new NoteColumn(noteColumn.name, [
      ...noteColumn.notes,
      new Note(`Note ${noteColumn.notes.length + 1}`),
    ]);
    setNoteColumn(updatedNoteColumn);
  }

  return (
    <div
      ref={setNodeRef}
      className=" w-full m-2 flex-col rounded border border-blue"
    >
      <h3 className="w-full text-center">
        {props.noteColumn?.name || "Note Column"}
      </h3>
      <SortableContext
        items={noteColumn.notes}
        strategy={verticalListSortingStrategy}
      >
        {noteColumn?.notes.map((note) => (
          <NoteItem
            note={note}
            key={note.id}
          />
        ))}
      </SortableContext>

      <hr />

      <button
        onClick={handleAddNote}
        className="text-gray-100"
      >
        add note..
      </button>
    </div>
  );
};

export default NoteColumnItem;
