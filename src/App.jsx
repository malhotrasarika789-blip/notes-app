import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  function addNote() {
    if (!note.trim()) return;

    setNotes([...notes, note]);
    setNote("");
  }

  function deleteNote(indexToDelete) {
    setNotes(
      notes.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <div className={darkMode ? "wrapper dark-bg" : "wrapper light-bg"}>
      <div className={darkMode ? "app dark" : "app light"}>
        <div className="header">
          <h1>📝 Notes App</h1>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <NoteForm
          note={note}
          setNote={setNote}
          addNote={addNote}
        />

        <NoteList
          notes={notes}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;