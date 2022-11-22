import React, { useContext } from "react";
import Accordion from "./Accordian";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LangContext } from "../contexts/LangContext";

const Quests = ({ setPrimos }) => {
  const ArchonQuests = dynamic(() => import("./ArchonQuests"), {
    suspense: true,
  });
  const StoryQuests = dynamic(() => import("./StoryQuests"), {
    suspense: true,
  });
  const Hangouts = dynamic(() => import("./Hangouts"), {
    suspense: true,
  });
  const WorldQuestSeries = dynamic(() => import("./WorldQuestsSeries"), {
    suspense: true,
  });
  const WorldQuest = dynamic(() => import("./WorldQuest"), {
    suspense: true,
  });
  const langContext = useContext(LangContext);
  return (
    <Accordion title={langContext.quests} icon={"/Quests.webp"}>
      <Suspense fallback="Loading....">
        <ArchonQuests setPrimos={setPrimos} />
      </Suspense>
      <Suspense fallback="Loading....">
        <StoryQuests setPrimos={setPrimos} />
      </Suspense>
      <Suspense fallback="Loading....">
        <Hangouts setPrimos={setPrimos} />
      </Suspense>
      <Suspense fallback="Loading....">
        <WorldQuestSeries setPrimos={setPrimos} />
      </Suspense>
      <Suspense fallback="Loading....">
        <WorldQuest setPrimos={setPrimos} />
      </Suspense>
    </Accordion>
  );
};

export default Quests;
