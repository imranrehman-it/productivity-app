import journalData from "./journalData";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import JournalTab from "./JournalTab";
import JournalContent from "./JournalContent";
import { useState } from "react";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { styled } from "@mui/system";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import { tabUnstyledClasses } from "@mui/base/TabUnstyled";

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
  border-radius: 20px;
`;

const Journal = () => {
  const [tab, setTab] = useState("0");

  return (
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
            />
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default Journal;
