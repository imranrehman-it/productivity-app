const JournalContent = ({ title, date, content }) => {
  return (
    <div className="journal-content">
      <h2>{title}</h2>
      <h5>{date}</h5>
      <h5>{content}</h5>
    </div>
  );
};
export default JournalContent;
