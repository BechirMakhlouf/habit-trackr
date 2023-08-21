import { randomUUID } from "crypto";

class NoteContent {
  textContent: string;
  attachedFiles: string[];

  constructor(textContent: string = "", attachedFiles: string[] = []) {
    this.textContent = textContent;
    this.attachedFiles = attachedFiles;
  }
}

class Note {
  readonly taskId: string = randomUUID();
  readonly creationDate: Date = new Date();
  private description: string;
  private attachedFiles: string[];
  lastEdited: Date;

  constructor(description: string, attachedFiles: string[] = []) {
    this.description = description;
    this.creationDate = new Date();
    this.lastEdited = new Date();
  }

  set description(newDescription: string) {

    this.lastEdited = new Date()
    this.description = newDescription
  }
}

const Notes = new Map<string, Note>();

const myNote = new Note(new NoteContent());

export default function Home() {
  return (
    <>
      <h1>Habit Trackr</h1>
      your Tasks:
      {Array.from(Notes).map(([_, note]) => note.description)}
    </>
  );
}
