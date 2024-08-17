import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { useContext } from "react";
import { NoteContext } from "../../../../contexts/NoteContext";
import { formatDateTime } from "../../../../utils/formatDateTime";

const NoteItem = ({ note }) => {
  const { title, description, isCompleted, createdAt } = note;
  const dateTime = formatDateTime(createdAt);
  const [setLocalNotes] = useLocalStorage("localNotes", []);
  const {
    noteStates: { notes },
    dispatch,
  } = useContext(NoteContext);

  // Remove Handler
  const removeHandler = (noteId) => {
    const updatedNotes = notes.filter((item) => item.id !== noteId);
    dispatch({ type: "SET_NOTES", payload: updatedNotes });
    setLocalNotes(updatedNotes);
    dispatch({
      type: "SET_MSG",
      payload: {
        text: "Removed Successfully!!!",
        isSucceed: true,
        isDeleteMsg: true,
      },
    });
  };

  // Edit Handler
  const editHandler = (note) => {
    dispatch({ type: "SET_EDIT_MODE", payload: note });
  };

  // Change Completed/Uncompleted Status
  const changeStatusHandler = (noteId) => {
    const updatedNotes = notes.map((item) => {
      if (item.id === noteId) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setLocalNotes(updatedNotes);
  };

  return (
    <div
      className={
        isCompleted
          ? "note shadow-xl p-4 rounded-md dark:text-slate-300 font-light dark:bg-slate-900 bg-blue-50"
          : "note shadow-xl p-4 rounded-md dark:text-slate-300 font-light dark:bg-slate-600 bg-white"
      }
    >
      <div className="note-header">
        <h3 className="title font-semibold text-2xl mb-2 text-blue-400 tracking-wider">
          {title}
        </h3>
        <p>{description}</p>
      </div>
      <div className="note-footer flex items-center mt-3">
        <div className="date me-auto text-slate-400">
          <small className="font-medium">{dateTime}</small>
        </div>
        <div className="btn-box flex gap-3 items-center">
          <input
            onChange={() => changeStatusHandler(note.id)}
            className="cursor-pointer rounded text-blue-600 size-[.95rem] mt-[0.15rem]"
            type="checkbox"
            checked={isCompleted}
          />
          <button className="text-lime-500" onClick={() => editHandler(note)}>
            <FiEdit />
          </button>
          <button
            className="text-red-400"
            onClick={() => removeHandler(note.id)}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
