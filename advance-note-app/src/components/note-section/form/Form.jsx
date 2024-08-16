// import { useContext, useEffect } from "react";
// import { NoteContext } from "../../../contexts/NoteContext";
// import useLocalStorage from "./../../../hooks/useLocalStorage";
// import { toast } from "react-toastify";

// const Form = () => {
//   const {
//     noteStates: { notes, note, editMode },
//     dispatch,
//   } = useContext(NoteContext);
//   const [localNotes, setLocalNotes] = useLocalStorage("localNotes", []);
//   const changeHandler = (e) => {
//     dispatch({
//       type: "SET_NOTE",
//       payload: {
//         property: e.target.name,
//         value: e.target.value,
//       },
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!note.title || !note.description) {
//       toast.success("This is a success message!", {
//         position: toast.POSITION.BOTTOM_RIGHT,
//       });
//       return alert("Please Fill All The Fields!!!");
//     }
//     editMode ? updateHandler() : addHandler();
//     dispatch({ type: "CLEAR_FORM" });
//   };
//   const addHandler = () => {
//     const newNote = {
//       ...note,
//       id: Date.now() + "",
//       createdAt: Date.now(),
//     };
//     setLocalNotes([newNote, ...localNotes]);
//   };
//   useEffect(() => {
//     dispatch({
//       type: "SET_NOTES",
//       payload: localNotes,
//     });
//   }, [localNotes]);

//   const updateHandler = () => {
//     const updatedNotes = notes.map((item) => {
//       if (item.id === note.id) {
//         return {
//           ...item,
//           title: note.title,
//           description: note.description,
//         };
//       }
//       return item;
//     });
//     setLocalNotes(updatedNotes);
//   };

//   return (
//     <div className="form w-full sm:w-2/3 lg:w-1/3">
//       <form action="" onSubmit={submitHandler}>
//         <div className="form-field mb-3">
//           <input
//             onChange={changeHandler}
//             type="text"
//             className="p-2 rounded-md w-full outline-none dark:bg-slate-600 dark:text-slate-300 placeholder:text-blue-400 tracking-wider border-2 border-transparent focus:border-blue-500"
//             placeholder="Note Title..."
//             name="title"
//             value={note.title}
//           />
//         </div>
//         <div className="form-field mb-3">
//           <textarea
//             onChange={changeHandler}
//             className="p-2 rounded-md outline-none w-full resize-none dark:bg-slate-600 dark:text-slate-300 placeholder:text-blue-400 tracking-wider border-2 border-transparent focus:border-blue-500"
//             placeholder="Note Description..."
//             rows="8"
//             name="description"
//             value={note.description}
//           ></textarea>
//         </div>
//         <div className="btn-box text-center">
//           <button className="text-blue-400 border border-1 border-blue-400 py-2 px-7 rounded-md hover:bg-blue-500 hover:text-white transition-all">
//             {editMode ? "Update Note" : "Add Note"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;







import React, { useContext, useEffect } from "react";
import { NoteContext } from "../../../contexts/NoteContext";
import useLocalStorage from "./../../../hooks/useLocalStorage";
import { toast } from "react-toastify";

const Form = () => {
  const {
    noteStates: { notes, note, editMode },
    dispatch,
  } = useContext(NoteContext);
  const [localNotes, setLocalNotes] = useLocalStorage("localNotes", []);

  const changeHandler = (e) => {
    dispatch({
      type: "SET_NOTE",
      payload: {
        property: e.target.name,
        value: e.target.value,
      },
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!note.title || !note.description) {
      toast.error("Please fill all the fields!", {
        position:  "bottom-left",
      });
      return;
    }
    editMode ? updateHandler() : addHandler();
    dispatch({ type: "CLEAR_FORM" });
    toast.success(
      editMode ? "Updated Successfully!" : "Added Successfully!",
      {
         position: "bottom-left",
      }
    );
  };

  const addHandler = () => {
    const newNote = {
      ...note,
      id: Date.now() + "",
      createdAt: Date.now(),
    };
    setLocalNotes([newNote, ...localNotes]);
  };

  useEffect(() => {
    dispatch({
      type: "SET_NOTES",
      payload: localNotes,
    });
  }, [localNotes, dispatch]);

  const updateHandler = () => {
    const updatedNotes = notes.map((item) => {
      if (item.id === note.id) {
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
