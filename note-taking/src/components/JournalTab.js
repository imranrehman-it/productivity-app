import { MdDeleteForever } from "react-icons/md";
const JournalTab = ({ title, date }) => {
  return (
    <>
      <div className="row">
        <h3>{title}</h3>
        <h5>{date}</h5>
      </div>
    </>
  );
};
export default JournalTab;
