// import { randomUUID } from "crypto";

import { randomUUID } from "crypto";

class Note {
  id: string = randomUUID();
  noteContent: string;

  constructor(noteContent: string = "") {
    this.noteContent = noteContent
  }
}

const Notes = new Map<string, Note>()

Notes.set("hello", new Note("world"))

console.log(JSON.stringify(Object.fromEntries(Notes)))
export default function Home() {
  return (
    <>
      <h1>habit Trackr</h1>
      <div className="habits">
        <section className="max-w-2xl text-center border dark:border-white">
          <h2>Task Group</h2>
          <hr />
          DragDro 
          <ul>
            
            <li className="border rounded m-2">task 1</li>
            <li className="border rounded m-2">task 2</li>
            <li className="border rounded m-2">task 3</li>
            <li className="border rounded m-2">task 4</li>
            <li className="border rounded m-2">task 5</li>
            <li className="border rounded m-2">task 6</li>
            <li className="border rounded m-2">task 7</li>
            <li className="border rounded m-2">task 8</li>
          </ul>
        </section>
      </div>
    </>
  );
}
