import { useContext } from "react";
import { NoteContext } from "../../../contexts/NoteContext";

const SelectBox = () => {
  const { dispatch } = useContext(NoteContext);
  const selectHandler = (e) => {
    dispatch({ type: "SET_SELECT_VALUE", payload: e.target.value });
  };

  return (
    <div className="select-box w-full">
      <select
        onChange={selectHandler}
        className="p-2 rounded-md outline-none w-full dark:bg-slate-800 text-blue-600 tracking-wider cursor-pointer"
      >
        <option value="ALL">All Notes</option>
        <option value="COMPLETED">Completed Notes</option>
        <option value="UNCOMPLETED">Uncompleted Notes</option>
      </select>
    </div>
  );
};

export default SelectBox;
