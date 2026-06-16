function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map((item, index) => (
        <div className="note-card" key={index}>
          <p>{item}</p>

          <button onClick={() => deleteNote(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;