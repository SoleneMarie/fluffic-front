"use client";

import { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import TitleExamples from "./TitleExamples";
import ButtonExamples from "./ButtonsExamples";
import TagsExamples from "./TagsExamples";
import IndicatorExamples from "./IndicatorExamples";

const tabs = [
  { label: "Titres", value: "titles" },
  { label: "Boutons", value: "buttons" },
  { label: "Badges", value: "tags" },
  { label: "Indicateurs", value: "indicators" },
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
        className="flex-wrap gap-6 select-none mt-4"
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

      {activeTab === "tags" && (
        <section className="mt-8 select-none">
          <TagsExamples />
        </section>
      )}

      {activeTab === "indicators" && (
        <section className="mt-8 select-none">
          <IndicatorExamples />
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
