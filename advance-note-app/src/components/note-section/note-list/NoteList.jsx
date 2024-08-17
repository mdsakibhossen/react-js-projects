import { useContext } from "react";
import NoteItem from "./note-item/NoteItem";
import { NoteContext } from "../../../contexts/NoteContext";

const NoteList = () => {
  const {
    noteStates: { notes, searchValue, selectValue, msg },
  } = useContext(NoteContext);

  let allNotes = notes.filter(
    (item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const setSelectedNotes = () => {
    switch (selectValue) {
      case "COMPLETED":
        allNotes = allNotes.filter((item) => item.isCompleted);
        break;
      case "UNCOMPLETED":
        allNotes = allNotes.filter((item) => !item.isCompleted);
        break;
      default:
        allNotes = allNotes;
        break;
    }
  };
  setSelectedNotes();

  return (
    <div className="w-full lg:w-2/3">
      {allNotes.length > 0 && msg.text && msg.isDeleteMsg && (
        <small
          className={`${
            msg.isSucceed
              ? "dark:text-green-300 text-green-500"
              : "dark:text-red-300 text-red-500"
          } block mb-1`}
        >
          {msg.text}
        </small>
      )}
      <div
        className={
          allNotes.length > 0
            ? "note-list w-full grid xl:grid-cols-2 gap-4"
            : "w-full flex items-center justify-center self-center"
        }
      >
        {allNotes.length ? (
          allNotes.map((note) => <NoteItem note={note} key={note.id} />)
        ) : (
          <h2 className="text-xl md:text-3xl dark:text-slate-200 text-center">
            No Notes are Available
          </h2>
        )}
      </div>
    </div>
  );
};

export default NoteList;
