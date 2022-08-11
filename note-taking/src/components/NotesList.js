import Note from './Note'
import App from '../App';
import AddNote from './AddNote';

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <div className="notes-list">
            {notes.map((note)=>
            ( <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>))}
        <AddNote handleAddNote={handleAddNote}/>
        </div>
        

    );
};

export default NotesList;