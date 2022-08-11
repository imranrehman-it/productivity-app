import { React, useState } from "react";

import { MdDeleteForever, MdSettingsApplications } from "react-icons/md";
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
    const newArray = tasks.push(addText);
    setAddTask("");
    console.log(addTask);
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
      <textarea
        placeholder="Type and add note"
        onChange={changeHandler}
      ></textarea>
      <MdOutlineSentimentSatisfiedAlt onClick={addTask} />
    </div>
  );
};
export default TextBox;
