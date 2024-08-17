export const noteReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTE": {
            return { ...state, note: { ...state.note, [action.payload.property]: action.payload.value } }
        }
        case "SET_NOTES": {
            return { ...state, notes: action.payload }
        }
        case "CLEAR_FORM": {
            return {
                ...state, note: {
                    id: "",
                    title: "",
                    description: "",
                    isCompleted: false,
                    createdAt: null
                },
                editMode: false,
                editableNote: null
            }
        }
        case "SET_EDIT_MODE": {
            return { ...state, note: action.payload, editMode: true, editableNote: action.payload }
        }

        case "REMOVE_NOTE": {
            return { ...state, notes: state.notes.filter(note => note.id !== action.payload) }
        }
        case "CHANGE_STATUS": {
            return {
                ...state, notes: state.notes.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            isCompleted: !item.isCompleted,
                        };
                    }
                    return item;
                })
            }
        }
        case "SET_SEARCH_VALUE": {
            return { ...state, searchValue: action.payload }
        }
        case "SET_SELECT_VALUE": {
            return { ...state, selectValue: action.payload }
        }
        case "SET_MSG": {
            return { ...state, msg: action.payload }
        }
        default: return state;
    }
}