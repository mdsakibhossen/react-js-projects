import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NoteSection from "./components/note-section/NoteSection";

const App = () => {
  return (
    <section className="dark:bg-slate-900/90 bg-slate-100 dark:text-white">
      <Header />
      <NoteSection />
      <Footer />
    </section>
  );
};

export default App;
