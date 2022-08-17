import React from "react";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Agenda from "./Agenda";
import TextBox from "../TextBox";

const Week = ({ calendar, id, weekTasks }) => {
  const [daySelected, setDaySelected] = useState(0);

  const [tasks, setText] = useState(weekTasks.monText);

  const handleChange = (event, newValue) => {
    setDaySelected(newValue);

    if (newValue == 0) {
      setText(weekTasks.monText);
    }
    if (newValue == 1) {
      setText(weekTasks.tuesText);
    }
    if (newValue == 2) {
      setText(weekTasks.wedText);
    }
    if (newValue == 3) {
      setText(weekTasks.thurText);
    }
    if (newValue == 4) {
      setText(weekTasks.friText);
    }
    if (newValue == 5) {
      setText(weekTasks.satText);
    }
    if (newValue == 6) {
      setText(weekTasks.sunText);
    }
  };

  return (
    <div className="agenda-content">
      <Tabs value={daySelected} onChange={handleChange}>
        <Tab label="Monday" />

        <Tab label="Tuesday" />

        <Tab label="Wednesday" />

        <Tab label="Thursday" />

        <Tab label="Friday" />

        <Tab label="Saturday" />

        <Tab label="Sunday" />
      </Tabs>
      {daySelected === 0 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.monText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 1 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.tuesText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 2 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.wedText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 3 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.thurText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 4 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.friText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 5 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.satText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
      {daySelected === 6 && (
        <TextBox
          calendar={calendar}
          tasks={weekTasks.sunText}
          setText={setText}
          idDay={daySelected}
          idWeek={id}
        />
      )}
    </div>
  );
};

export default Week;
