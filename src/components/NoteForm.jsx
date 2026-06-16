function NoteForm({ note, setNote, addNote }) {
  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;