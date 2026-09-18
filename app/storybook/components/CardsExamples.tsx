"use client";

import { useRouter } from "next/navigation";
import SectionTitle from "@/components/titles/SectionTitle";

import LoginCTACard from "@/components/cards/CTACards/LoginCTACard";
import MatchCTACard from "@/components/cards/CTACards/MatchCTACard";

const CardExamples = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-content gap-4">
      <SectionTitle className="mb-2">
        Cartes d&apos;appel à l&apos;action
      </SectionTitle>
      <div className="flex flex-col md:flex-row gap-6 items-center pb-4">
        <MatchCTACard onClick={() => router.push("/matches")} />
        <LoginCTACard
          onLogin={() => router.push("/login")}
          onCreateAccount={() => router.push("/register")}
        />
      </div>
      <SectionTitle className="mb-2">Petite carte animal</SectionTitle>
    </div>
  );
};

export default CardExamples;
