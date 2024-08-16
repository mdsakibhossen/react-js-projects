import { useContext, useEffect } from "react";
import NoteItem from "./note-item/NoteItem";
import { NoteContext } from "../../../contexts/NoteContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

const NoteList = () => {
  const {
    noteStates: { notes, searchValue, selectValue },
    dispatch,
  } = useContext(NoteContext);
  const [localNotes] = useLocalStorage("localNotes", []);
  useEffect(() => {
    dispatch({ type: "SET_NOTES", payload: localNotes });
  }, [localNotes]);

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
    <div
      className={
        allNotes.length > 0
          ? "note-list w-full lg:w-2/3 grid xl:grid-cols-2 gap-4"
          : "w-full lg:w-2/3 flex items-center justify-center self-center"
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
  );
};

export default NoteList;
