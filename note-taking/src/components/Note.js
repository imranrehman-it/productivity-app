import { MdDeleteForever } from "react-icons/md";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { Tooltip, IconButton, DeleteIcon } from "@mui/material";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <Tooltip title="Delete Note">
            <IconButton>
              <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="delete-icon"
                size="1em"
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Note;
