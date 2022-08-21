import JournalTab from "./JournalTab";
import { MdTaskAlt } from "react-icons/md";
const AddJournal = ({ newJournal }) => {
  return (
    <div className="journal-create-note">
      <MdTaskAlt size="1.5rem" onClick={newJournal} />
      <h7>Create New Note</h7>
    </div>
  );
};
export default AddJournal;
