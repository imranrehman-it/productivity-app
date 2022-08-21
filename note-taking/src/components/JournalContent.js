import journalData from "./journalData";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const JournalContent = ({
  title,
  date,
  content,
  id,
  saveData,
  deleteJournal,
}) => {
  const [text, setText] = useState(content);
  const [name, setName] = useState(title);

  const changeHandler = (event) => {
    setText(event.target.value);
    saveData(text, id, name, date);
  };

  const changeTitle = (event) => {
    setName(event.target.value);
    console.log(name);
    saveData(text, id, name, date);
  };

  return (
    <div className="journal-content">
      <div className="journal-title">
        <textarea value={name} onChange={changeTitle}></textarea>
        <MdDeleteForever size="1rem" onClick={deleteJournal(id)} />
        <h5>{date}</h5>
      </div>

      <textarea
        placeholder="Begin typing you new journal..."
        onChange={changeHandler}
        value={text}
      ></textarea>
    </div>
  );
};
export default JournalContent;
