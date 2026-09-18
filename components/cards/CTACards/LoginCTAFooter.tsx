type LoginCTAFooterProps = {
  onCreateAccount: () => void;
};

const LoginCTAFooter = ({ onCreateAccount }: LoginCTAFooterProps) => {
  return (
    <button
      type="button"
      onClick={onCreateAccount}
      className="text-primary font-semibold hover:text-primary-dark hover:underline text-[13px] @sm:text-[14px] @md:text-base"
    >
      Créer un compte
    </button>
  );
};

export default LoginCTAFooter;
