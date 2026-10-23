type SideMenuNavOptionProps = {
  label: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
  isAlert?: boolean;
  onClick?: () => void;
};

type OptionLineStyleParams = {
  isActive?: boolean;
  isAlert?: boolean;
};

const optionLineStyle = ({
  isActive = false,
  isAlert = false,
}: OptionLineStyleParams) =>
  `flex items-center gap-2 py-1 ${
    isAlert
      ? "text-alert hover:underline hover:decoration-alert font-semibold"
      : isActive
        ? "text-primary font-semibold hover:underline"
        : "text-secondary-dark font-medium hover:underline"
  }`;

const optionTextStyle = "translate-y-px  text-sm sm:text-base md:text-lg";

const iconContainerStyle = "flex items-center w-8 h-8 md:w-10 md:h-10";

const SideMenuNavOption = ({
  label,
  icon,
  href,
  isActive = false,
  isAlert = false,
  onClick,
}: SideMenuNavOptionProps) => {
  const optionStyle = optionLineStyle({
    isActive,
    isAlert,
  });

  return (
    <li className={optionStyle}>
      {href ? (
        <a type="link" href={href} className="flex items-center gap-2 w-full">
          <div className={iconContainerStyle}>{icon}</div>

          <span className={optionTextStyle}>{label}</span>
        </a>
      ) : (
        <button
          type="button"
          aria-label="logout"
          className="flex items-center gap-2 w-full"
          onClick={onClick}
        >
          <div className={iconContainerStyle}>{icon}</div>

          <span className={optionTextStyle}>{label}</span>
        </button>
      )}
    </li>
  );
};

export default SideMenuNavOption;
