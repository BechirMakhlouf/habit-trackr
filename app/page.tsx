interface Note {
  description: string;
  lastEdited: Date;
  creationDate: Date;
}

const Notes = new Map<string, Note>();

export default function Home() {
  return (
    <>
      <h1>Habit Trackr</h1>
      your Tasks:
      {
        Array.from(Notes).map(([_, note]) => note.description)
      }
    </>
  );
}
