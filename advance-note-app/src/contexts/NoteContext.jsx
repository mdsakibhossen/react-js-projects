import { createContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

export const NoteContext = createContext();
const initialStates = {
  note: {
    id: "",
    title: "",
    description: "",
    isCompleted: false,
    createdAt: null,
  },
  notes: [],
  editMode: false,
  searchValue: "",
  selectValue: "ALL",
};
const NoteProvider = ({ children }) => {
  const [noteStates, dispatch] = useReducer(noteReducer, initialStates);
  return (
    <NoteContext.Provider value={{ noteStates, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteProvider;
