import JournalTab from "./JournalTab";
import { MdTaskAlt, MdAddCircleOutline } from "react-icons/md";
const AddJournal = ({ newJournal }) => {
  return (
    <div className="journal-create-note">
      <MdAddCircleOutline size="1.5rem" onClick={newJournal} />
    </div>
  );
};
export default AddJournal;
