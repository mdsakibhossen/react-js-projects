import React, { useContext } from "react";
import { NoteContext } from "../../../contexts/NoteContext";

const SearchBox = () => {
  const {
    noteStates: { searchValue },
    dispatch,
  } = useContext(NoteContext);

  return (
    <div className="search-box w-full">
      <input
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value })
        }
        type="search"
        className="p-2 text-blue-600 rounded-md outline-none w-full dark:bg-slate-800 placeholder:text-blue-600 tracking-wider"
        placeholder="Search Notes..."
        value={searchValue}
      />
    </div>
  );
};

export default SearchBox;
