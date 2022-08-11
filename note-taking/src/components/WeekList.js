import React from "react";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Agenda from "./Agenda";
import TextBox from "../TextBox";

const Week = ({ calendar, id }) => {
  const [daySelected, setDaySelected] = useState(0);

  const found = calendar.find((obj) => {
    return obj.id === id;
  });

  console.log(found);

  const [tasks, setText] = useState(found.monText);

  const handleChange = (event, newValue) => {
    setDaySelected(newValue);

    if (newValue == 0) {
      setText(found.monText);
    }
    if (newValue == 1) {
      setText(found.tuesText);
    }
    if (newValue == 2) {
      setText(found.wedText);
    }
    if (newValue == 3) {
      setText(found.thurText);
    }
    if (newValue == 4) {
      setText(found.friText);
    }
    if (newValue == 5) {
      setText(found.satText);
    }
    if (newValue == 6) {
      setText(found.sunText);
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
      {daySelected === 0 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 1 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 2 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 3 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 4 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 5 && <TextBox tasks={tasks} setText={setText} />}
      {daySelected === 6 && <TextBox tasks={tasks} setText={setText} />}
    </div>
  );
};

export default Week;
