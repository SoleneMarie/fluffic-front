import CTACard from "@/components/cards/CTACards/CTACard";

type MatchCTACardProps = {
  onClick: () => void;
};

const MatchCTACard = ({ onClick }: MatchCTACardProps) => {
  return (
    <CTACard
      title={
        <>
          Découvrez vos <span className="text-primary">matchs parfaits</span>
        </>
      }
      description="Répondez à quelques questions et trouvez des animaux qui vous correspondent vraiment"
      illustration="/images/perfect-match-illustration.png"
      buttonLabel="Commencer"
      onClick={onClick}
    />
  );
};

export default MatchCTACard;
