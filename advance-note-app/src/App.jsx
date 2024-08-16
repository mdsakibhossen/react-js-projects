import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NoteSection from "./components/note-section/NoteSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <section className="dark:bg-slate-900/90 bg-slate-100 dark:text-white">
      <Header />
      <NoteSection />
      <ToastContainer />
      <Footer />
    </section>
  );
};

export default App;
