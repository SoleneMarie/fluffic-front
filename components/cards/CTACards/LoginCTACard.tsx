import CTACard from "@/components/cards/CTACards/CTACard";
import HeartIcon from "@/components/icons/HeartIcon";
import LoginCTAFooter from "@/components/cards/CTACards/LoginCTAFooter";

type LoginCTACardProps = {
  onLogin: () => void;
  onCreateAccount: () => void;
};

const LoginCTACard = ({ onLogin, onCreateAccount }: LoginCTACardProps) => {
  return (
    <CTACard
      title={
        <>
          Gardez vos{" "}
          <span className="text-primary inline-flex items-center gap-1">
            coups de
            <HeartIcon className="w-5 @xs:w-6 @sm:w-7 @sm:mx-0.5 @md:w-8" />
          </span>{" "}
          près de vous
        </>
      }
      description="Connectez-vous pour enregistrer vos favoris et retrouver toutes vos préférences."
      illustration="/images/login-illustration.png"
      buttonLabel="Se connecter"
      onClick={onLogin}
      footer={<LoginCTAFooter onCreateAccount={onCreateAccount} />}
    />
  );
};

export default LoginCTACard;
