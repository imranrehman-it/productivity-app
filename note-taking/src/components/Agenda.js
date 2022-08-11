import React from "react";
import { useState } from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "react-tabs/style/react-tabs.css";
import Week from "./WeekList";

const Agenda = () => {
  const calendar = [
    {
      id: 0,
      monText: ["mon task 1", " mon task2", "mon task 3"],
      tuesText: ["tuesday task 1", " tuesday task 2", "tuesday task 3"],
      wedText: ["wednesday task 1", " wednesday task 2", "wednesday task 3"],
      thurText: ["thursday task 1", " thursday task 2", "thursday task 3"],
      friText: ["friday task 1", " friday task 2", "friday task 3"],
      satText: ["saturday task 1", " saturday task 2", "saturday task 3"],
      sunText: ["sunday task 1", " sunday task 2", "sunday task 3"],
    },
    {
      id: 1,
      monText: ["mon task 11", " mon task 22", "mon task 33"],
      tuesText: ["tuesday task 11", " tuesday task 22", "tuesday task 33"],
      wedText: ["wednesday task 11", " wednesday task 22", "wednesday task 33"],
      thurText: ["thursday task 11 ", " thursday task 22", "thursday task 33"],
      friText: ["friday task 11", " friday task 22", "friday task 33"],
      satText: ["saturday task 11", " saturday task 22", "saturday task 33"],
      sunText: ["sunday task 11", " sunday task 22", "sunday task 33"],
    },
    {
      id: 2,
      monText: ["mon task 11", " mon task 22", "mon task 33"],
      tuesText: ["tuesday task 11", " tuesday task 22", "tuesday task 33"],
      wedText: ["wednesday task 11", " wednesday task 22", "wednesday task 33"],
      thurText: ["thursday task 11 ", " thursday task 22", "thursday task 33"],
      friText: ["friday task 11", " friday task 22", "friday task 33"],
      satText: ["saturday task 11", " saturday task 22", "saturday task 33"],
      sunText: ["sunday task 11", " sunday task 22", "sunday task 33"],
    },
    {
      id: 3,
      monText: ["mon task 1111", " mon task 2222", "mon task 3333"],
      tuesText: [
        "tuesday task 1111",
        " tuesday task 2222",
        "tuesday task 3333",
      ],
      wedText: [
        "wednesday task 1111",
        " wednesday task 2222",
        "wednesday task 3333",
      ],
      thurText: [
        "thursday task 1111 ",
        " thursday task 2222",
        "thursday task 3333",
      ],
      friText: ["friday task 1111", " friday task 2222", "friday task 3333"],
      satText: [
        "saturday task 1111",
        " saturday task 2222",
        "saturday task 3333",
      ],
      sunText: ["sunday task 1111", " sunday task 2222", "sunday task 3333"],
    },
    {
      id: 4,
      monText: ["mon task 111", " mon task 222", "mon task 333"],
      tuesText: ["tuesday task 111", " tuesday task 222", "tuesday task 333"],
      wedText: [
        "wednesday task 111",
        " wednesday task 222",
        "wednesday task 333",
      ],
      thurText: [
        "thursday task 111 ",
        " thursday task 222",
        "thursday task 333",
      ],
      friText: ["friday task 111", " friday task 222", "friday task 333"],
      satText: ["saturday task 111", " saturday task 222", "saturday task 333"],
      sunText: ["sunday task 111", " sunday task 222", "sunday task 333"],
    },
  ];

  const [tabSelected, setTabSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
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
      {tabSelected === 0 && <Week calendar={calendar} id={tabSelected} />}
      {tabSelected === 1 && <Week calendar={calendar} id={tabSelected} />}
      {tabSelected === 2 && <Week calendar={calendar} id={tabSelected} />}
      {tabSelected === 3 && <Week calendar={calendar} id={tabSelected} />}
      {tabSelected === 4 && <Week calendar={calendar} id={tabSelected} />}
      {tabSelected === 5 && <Week calendar={calendar} id={tabSelected} />}
    </div>
  );
};

export default Agenda;
