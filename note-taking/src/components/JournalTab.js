import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
const JournalTab = ({ title, date, sampleText }) => {
  return (
    <div className="col">
      <div className="journal-tab">
        <text>{title.slice(0, 40)}</text>
        <text className="date">{date}</text>
        <text className="sample-text">{sampleText.slice(0, 30) + "..."}</text>
      </div>
    </div>
  );
};
export default JournalTab;
