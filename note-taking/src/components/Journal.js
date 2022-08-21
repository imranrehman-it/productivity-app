import journalData from "./journalData";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import JournalTab from "./JournalTab";
import JournalContent from "./JournalContent";
import { useEffect, useState } from "react";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { styled } from "@mui/system";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import AddJournal from "./AddJournal";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tabs = styled(TabsUnstyled)`
  display: flex;
  border-radius: 20px;
  background-color: #fef68a
  flex-direction: row;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  margin-bottom: 10rem;
  border-radius: 5px;
`;
//indicidual tabs
const Tab = styled(TabUnstyled)`
  font-family: monaco, Consolas, Lucida Console, monospace;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #fef68a;
  width: fill;
  border: none;
  display: flex;
  justify-content: left;

  &:hover {
    background-color: #fffab2;
  }

  &:focus {
    color: #fff;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fffab2;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

//content area
const TabPanel = styled(TabPanelUnstyled)`
  width: 70%;
  font-size: 0.875rem;
  background-color: #fef68a;
  padding: 0.25rem 1rem 1rem 0.25rem;
`;

const TabsList = styled(TabsListUnstyled)`
  background-color: #fef68a;
  display: flex;
  align-items: left;
  flex-direction: column;
  align-content: space-between;
  width: 30%;
`;

const Journal = () => {
  const [journalData, setData] = useState([
    {
      id: 0,
      title: "First Journal",
      date: "2022-08-18",
      content:
        "This is some text within the journal, this journal is the first journal we are testing written on 2022-08-18",
    },
    {
      id: 1,
      title: "Second Journal",
      date: "2022-08-19",
      content:
        "This is some text within the journal, this journal is the second journal we are testing written on 2022-08-18",
    },
    {
      id: 2,
      title: "Third Journal",
      date: "2022-08-20",
      content:
        "This is some text within the journal, this journal is the third journal we are testing written on 2022-08-18",
    },
  ]);

  const saveData = (text, id, title, date) => {
    const newArray = journalData.map((obj) => {
      if (obj.id === id) {
        return { ...obj, content: text, title: title, date: date };
      }
      return obj;
    });

    setData(newArray);
  };

  const newJournal = () => {
    const newObject = {
      id: journalData.length,
      title: "Untitled",
      date: "today",
      content: "",
    };

    setData([...journalData, newObject]);
  };

  const deleteJournal = (id) => {
    console.log(id);
  };

  const [tab, setTab] = useState("0");

  return (
    <>
      <AddJournal newJournal={newJournal} />
      <Tabs defaultValue={0}>
        <TabsList>
          {journalData.map((journal) => {
            return (
              <Tab>
                <JournalTab title={journal.title} date={journal.date} />
              </Tab>
            );
          })}
        </TabsList>

        {journalData.map((journal) => {
          return (
            <TabPanel value={journal.id}>
              <JournalContent
                title={journal.title}
                date={journal.date}
                content={journal.content}
                id={journal.id}
                saveData={saveData}
                deleteJournal={deleteJournal}
              />
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
};

export default Journal;
