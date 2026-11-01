import FlufficButton from "@/components/buttons/FlufficButton";
import PawIcon from "@/components/icons/PawIcon";
import FlufficTitle from "@/components/titles/FlufficTitle";
import MainTitle from "@/components/titles/MainTitle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center select-none">
      <FlufficTitle size="large" />
      <MainTitle className="my-3">
        <span>Organisateur de rencontres </span>
        <span>entre animaux et adoptants</span>
      </MainTitle>
      <div className="flex flex-col gap-6 mt-8 md:mt-12">
        <FlufficButton
          size="large"
          icon={<PawIcon />}
          contentAlignment="start"
          href="/animals"
        >
          Rencontrer les animaux
        </FlufficButton>
        <FlufficButton
          variant="secondary"
          size="large"
          icon={<PawIcon />}
          contentAlignment="start"
          href="/pro"
        >
          Espace professionnel
        </FlufficButton>
      </div>
    </div>
  );
}
