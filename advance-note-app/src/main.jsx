import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import NoteProvider from "./contexts/NoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NoteProvider>
        <App />
      </NoteProvider>
    </ThemeProvider>
  </React.StrictMode>
);
