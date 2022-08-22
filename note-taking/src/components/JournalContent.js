import journalData from "./journalData";
import { useEffect, useState } from "react";
import { MdDeleteForever, MdImage } from "react-icons/md";

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
  useEffect(() => {
    saveData(text, id, name, date);
  }, [text]);

  const changeTitle = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  useEffect(() => {
    saveData(text, id, name, date);
  }, [name]);

  return (
    <div className="journal-content">
      <div className="journal-title">
        <textarea value={name} onChange={changeTitle}></textarea>
        <h5>{date}</h5>
      </div>

      <textarea
        rows="15"
        cols="10"
        className="fill"
        placeholder="Begin typing you new journal..."
        onChange={changeHandler}
        value={text}
      ></textarea>
      <div className="journal-content-footer">
        <MdImage size="1rem" />
        <MdDeleteForever size="1rem" onClick={deleteJournal(id)} />
      </div>
    </div>
  );
};
export default JournalContent;
