"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../Animation/variants";

const ProjectTabs = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const tabs = ["All", "Web Development", "Web Design", "Graphic Design"];
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`tab rounded-lg ${currentTab === tab ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </motion.div>
  );
};
export default ProjectTabs;
