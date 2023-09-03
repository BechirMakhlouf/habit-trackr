"use client";
import NoteItem, { Note } from "./NoteItem";
import { useState } from "react";
import { UUID } from "crypto";
import { v4 as uuidV4 } from "uuid";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
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
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

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

  function handleAddNote() {
    const updatedNoteColumn = new NoteColumn(noteColumn.name, [
      ...noteColumn.notes,
      new Note(`Note ${noteColumn.notes.length + 1}`),
    ]);
    setNoteColumn(updatedNoteColumn);
  }

  return (
    <div className=" w-full m-2 flex-col rounded border border-blue">
      <h3 className="w-full text-center">
        {props.noteColumn?.name || "Note Column"}
      </h3>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
      </DndContext>

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
