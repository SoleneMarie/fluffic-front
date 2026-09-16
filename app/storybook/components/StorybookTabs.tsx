"use client";

import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import TitleExamples from "./TitleExamples";

const tabs = [
  { label: "Titres", value: "titles" },
  //   { label: "Boutons", value: "buttons" },
  //   { label: "Cartes", value: "cards" },
];

const StorybookTabs = () => {
  const [activeTab, setActiveTab] = useState("titles");

  return (
    <>
      <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "titles" && (
        <section className="mt-8">
          <TitleExamples />
        </section>
      )}

      {/* 
      {activeTab === "buttons" && (
        <StorybookSection title="Boutons">
          <ButtonExamples />
        </StorybookSection>
      )}

      {activeTab === "cards" && (
        <StorybookSection title="Cartes">
          <CardExamples />
        </StorybookSection>
      )}
      */}
    </>
  );
};

export default StorybookTabs;
