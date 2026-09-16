"use client";

import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import TitleExamples from "./TitleExamples";
import ButtonExamples from "./ButtonsExamples";

const tabs = [
  { label: "Titres", value: "titles" },
  { label: "Boutons", value: "buttons" },
  //   { label: "Cartes", value: "cards" },
];

const StorybookTabs = () => {
  const [activeTab, setActiveTab] = useState("titles");

  return (
    <>
      <Tabs
        items={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="gap-6 select-none mt-4"
      />

      {activeTab === "titles" && (
        <section className="mt-8 select-none">
          <TitleExamples />
        </section>
      )}

      {activeTab === "buttons" && (
        <section className="mt-8 select-none">
          <ButtonExamples />
        </section>
      )}

      {/* 
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
