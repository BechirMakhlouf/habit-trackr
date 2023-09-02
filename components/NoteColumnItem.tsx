"use client";
import NoteItem, { Note } from "./NoteItem";
import { PropsWithChildren, useState } from "react";
import { UUID } from "crypto";
import { v4 as uuidV4 } from "uuid";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <DndContext
      sensors={sensors}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map((id) => <SortableItem key={id} id={id} />)}
      </SortableContext>
    </DndContext>
  );
}

function handleDragEnd(event: any) {
  const { active, over } = event;

  if (active.id !== over.id) {
    setItems((items: any) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  }
}
const NoteColumnItem = (props: NoteColumnProps) => {
  const [noteColumn, setNoteColumn] = useState(props.noteColumn);
  const { isOver, setNodeRef } = useDroppable({
    id: noteColumn.id,
  });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
    >
      {/* onDragEnd={handleDragEnd} */}
      <div
        ref={setNodeRef}
        className="w-full m-2 flex-col rounded border border-blue"
      >
        <h3 className="w-full text-center">
          {props.noteColumn?.name || "Note Column"}
        </h3>
        {props.children}
        {noteColumn?.notes.map((note) => <NoteItem
          note={note}
          key={note.id}
        />)}

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
    </DndContext>
  );
};

export default NoteColumnItem;
