import { randomUUID } from "crypto";

class NoteContent {
  textContent: string;
  attachedFiles: string[];

  constructor(textContent: string = "", attachedFiles: string[] = []) {
    this.textContent = textContent;
    this.attachedFiles = attachedFiles;
  }
}

// class Note {
//   readonly taskId: string = randomUUID();
//   readonly creationDate: Date = new Date();
//   private description: string;
//   private attachedFiles: string[];
//   lastEdited: Date;
//
//   constructor(description: string, attachedFiles: string[] = []) {
//     this.description = description;
//     this.creationDate = new Date();
//     this.lastEdited = new Date();
//   }
//
//   set description(newDescription: string) {
//
//     this.lastEdited = new Date()
//     this.description = newDescription
//   }
// }
//
// const Notes = new Map<string, Note>();
//
// const myNote = new Note(new NoteContent());
//
export default function Home() {
  return (
    <>
      <h1>habit Trackr</h1>
      <div className="habits">
        <section className="task border dark:border-white">
          <h2>Task Group</h2>
          <hr />
          <ul>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
            <li>task 4</li>
            <li>task 5</li>
            <li>task 6</li>
            <li>task 7</li>
            <li>task 8</li>
          </ul>
        </section>
      </div>
    </>
  );
}
