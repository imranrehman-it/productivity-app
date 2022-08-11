import React from "react";
import "react-tabs/style/react-tabs.css";
import { MdDeleteForever } from "react-icons/md";

const TextBox = ({ tasks, calendar, id }) => {
  const changeHandler = (event) => {};

  return (
    <div className="text-box">
      <ul>
        {tasks.map((task) => {
          console.log(task);
          return (
            <div className="task">
              <li>{task}</li>
              <MdDeleteForever size="1.3em" />
            </div>
          );
        })}
      </ul>
      <textarea placeholder="Type and add note"></textarea>
    </div>
  );
};

export default TextBox;
