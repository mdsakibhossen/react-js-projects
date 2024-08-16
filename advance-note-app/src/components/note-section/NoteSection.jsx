import Form from "./form/Form";
import NoteList from "./note-list/NoteList";

const NoteSection = () => {
  return (
    <div className="note-section dark:bg-slate-800">
      <div className=" container mx-auto py-10  px-3 flex gap-8 flex-col items-center md:flex-row md:items-start">
        <Form />
        <NoteList />
      </div>
    </div>
  );
};

export default NoteSection;
