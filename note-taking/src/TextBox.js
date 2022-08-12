import { React, useEffect, useState } from "react";

import { MdDeleteForever, MdCheckCircle } from "react-icons/md";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";

const TextBox = ({ tasks, calendar, id, setText }) => {
  const [addText, setAddTask] = useState("");

  const deleteHandler = (task) => {
    const newArray = tasks.filter(function (item) {
      return item != task;
    });

    setText(newArray);
  };

  const changeHandler = (event) => {
    setAddTask(event.target.value);
  };

  const addTask = () => {
    if (addText.trim().length > 0) {
      const newArray = tasks.push(addText);
      setAddTask("");
    }
  };

  return (
    <div className="text-box">
      <ul>
        {tasks.map((task) => {
          console.log(task);
          return (
            <div className="task">
              <li>{task}</li>
              <MdDeleteForever size="1em" onClick={() => deleteHandler(task)} />
            </div>
          );
        })}
      </ul>
      <div className="add-task">
        <textarea
          placeholder="Type and add note"
          onChange={changeHandler}
          value={addText}
        ></textarea>
        <MdCheckCircle size="1.5em" onClick={addTask} />
      </div>
    </div>
  );
};
export default TextBox;
