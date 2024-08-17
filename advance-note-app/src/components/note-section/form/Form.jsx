import { useContext, useEffect } from "react";
import { NoteContext } from "../../../contexts/NoteContext";
import useLocalStorage from "./../../../hooks/useLocalStorage";

const Form = () => {
  const {
    noteStates: { notes, note, editMode, editableNote, msg },
    dispatch,
  } = useContext(NoteContext);
  const [localNotes, setLocalNotes] = useLocalStorage("localNotes", []);

  // Run When Title & Description Takes Input
  const changeHandler = (e) => {
    dispatch({
      type: "SET_NOTE",
      payload: {
        property: e.target.name,
        value: e.target.value,
      },
    });
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.description.trim()) {
      dispatch({
        type: "SET_MSG",
        payload: {
          text: "Please Fill All The Fields...",
          isSucceed: false,
          isDeleteMsg: false,
        },
      });
      return;
    }
    editMode ? updateHandler() : addHandler();
    dispatch({
      type: "SET_MSG",
      payload: {
        text: editMode ? "Updated Successfully!!!" : "Added Successfully!!!",
        isSucceed: true,
        isDeleteMsg: false,
      },
    });
    dispatch({ type: "CLEAR_FORM" });
  };

  // Add Note Handler
  const addHandler = () => {
    const newNote = {
      ...note,
      id: Date.now() + "",
      createdAt: Date.now(),
    };

    // Reset localNotes if all notes have been deleted
    if (notes.length === 0) {
      setLocalNotes([newNote]);
    } else {
      setLocalNotes([newNote, ...localNotes]);
    }
  };

  // Setting Local Notes to State (That's why notes are seen into NoteList)
  useEffect(() => {
    dispatch({
      type: "SET_NOTES",
      payload: localNotes,
    });
  }, [localNotes]);

  // Update Note Handler
  const updateHandler = () => {
    const updatedNotes = notes.map((item) => {
      if (item.id === editableNote.id) {
        return {
          ...item,
          title: note.title,
          description: note.description,
        };
      }
      return item;
    });
    setLocalNotes(updatedNotes);
  };

  return (
    <div className="form w-full sm:w-2/3 lg:w-1/3">
      <form action="" onSubmit={submitHandler}>
        {msg.text && !msg.isDeleteMsg && (
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
        <div className="form-field mb-3">
          <input
            onChange={changeHandler}
            type="text"
            className="p-2 rounded-md w-full outline-none dark:bg-slate-600 dark:text-slate-300 placeholder:text-blue-400 tracking-wider border-2 border-transparent focus:border-blue-500"
            placeholder="Note Title..."
            name="title"
            value={note.title}
          />
        </div>
        <div className="form-field mb-3">
          <textarea
            onChange={changeHandler}
            className="p-2 rounded-md outline-none w-full resize-none dark:bg-slate-600 dark:text-slate-300 placeholder:text-blue-400 tracking-wider border-2 border-transparent focus:border-blue-500"
            placeholder="Note Description..."
            rows="8"
            name="description"
            value={note.description}
          ></textarea>
        </div>
        <div className="btn-box text-center">
          <button className="text-blue-400 border border-1 border-blue-400 py-2 px-7 rounded-md hover:bg-blue-500 hover:text-white transition-all">
            {editMode ? "Update Note" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
