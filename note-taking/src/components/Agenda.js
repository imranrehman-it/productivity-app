import React from "react";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import calendar from "./calendar.js";

import Week from "./WeekList";

const Agenda = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };

  const obtainObject = (id) => {
    var result = calendar.find((item) => item.id === id);
    console.log(result);
    return result;
  };

  return (
    <div className="agenda">
      <Tabs value={tabSelected} onChange={handleChange} orientation="vertical">
        <Tab label="August 1st - August 7th" />
        <Tab label="August 8th - August 14th" />
        <Tab label="August 15th - August 21st" />
        <Tab label="August 22nd - August 28th" />
        <Tab label="August 29th - August 31st" />
      </Tabs>
      {tabSelected === 0 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
      {tabSelected === 1 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
      {tabSelected === 2 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
      {tabSelected === 3 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
      {tabSelected === 4 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
      {tabSelected === 5 && (
        <Week
          calendar={calendar}
          id={tabSelected}
          weekTasks={obtainObject(tabSelected)}
        />
      )}
    </div>
  );
};

export default Agenda;
