import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Agenda from "./components/Agenda";
import Journal from "./components/Journal";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Title 1",
      text: "This is my First note!",
      date: "2022-08-02",
    },
    {
      id: nanoid(),
      title: "Title 2",
      text: "This is my Second note!",
      date: "2022-08-02",
    },
    {
      id: nanoid(),
      title: "Title 3",
      text: "This is my Third note!",
      date: "2022-08-02",
    },
    {
      id: nanoid(),
      title: "Title 4",
      text: "This is my Fourth note!",
      date: "2022-08-02",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Note Taking</h1>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <h1>Agenda</h1>
      <Agenda />
      <h1>Journal</h1>
      <Journal />
    </div>
  );
};

export default App;
