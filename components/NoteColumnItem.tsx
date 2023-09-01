import NoteItem, { Note } from "./NoteItem";
import { PropsWithChildren } from "react";
import { randomUUID, UUID } from "crypto";

export class NoteColumn {
  readonly id: UUID = randomUUID();
  name: string;
  notes: Note[];

  constructor(name: string, notes?: Note[]) {
    this.name = name;
    this.notes = notes || [];
  }
}

interface NoteColumnProps extends PropsWithChildren {
  notesList?: Note[];
}
const NoteColumnItem = (props: NoteColumnProps) => {
  return (
    <div className=" w-full m-2 flex-col rounded border border-blue">
      <h3 className="w-full text-center">column name</h3>
      {props.children}
      {props?.notesList?.map((note) => <NoteItem note={note} />)}
      <hr />
      <p className="text-gray-100">add note..</p>
    </div>
  );
};

export default NoteColumnItem;
