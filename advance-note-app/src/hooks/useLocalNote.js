// import { useEffect, useState } from "react";

// export const useLocalNote = () => {
//     const [localNotes, setLocalNotes] = useState(() => {
//         const items = localStorage.getItem("localNotes");
//         return items ? JSON.parse(localStorage.getItem("localNotes")) : [];
//     });
//     useEffect(()=>{
//         localStorage.setItem("localNotes", JSON.stringify(localNotes))
//     }, [localNotes])

//     return { localNotes,setLocalNotes}
// }





/* Not Used(My Code)- Used useLocalStorage- it is dynamic */ 