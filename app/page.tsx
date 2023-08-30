"use client";
// import { randomUUID } from "crypto";

import { randomUUID, UUID } from "crypto";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// class Note {
//   id: string = randomUUID();
//   noteContent: string;
//
//   constructor(noteContent: string = "") {
//     this.noteContent = noteContent;
//   }
// }

// class notesState {
//   Notes: Map<string, Note>
//
//   constructor(Notes) {
//
//   }
// }

// const Notes = new Map<string, Note>();
//
// interface noteColumn {
//   title: string;
//   notesID: UUID[];
// }
// //
// const notesState = {
//   noteColumns: [],
// };
//
// Notes.set("hello", new Note("world"));
//
export default function Home() {
  return (
    <>
      <h1>habit Trackr</h1>
      <DragDropContext onDragEnd={() => console.log("dropped")}>
        <Droppable droppableId="sdlkfjsdkl">
          {(provided) => (
            <div className="habits">
              <section className="max-w-2xl text-center border dark:border-white">
                <h2>Task Group</h2>
                <hr />

                <ul>
                </ul>
              </section>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
