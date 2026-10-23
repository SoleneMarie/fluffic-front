import { ButtonHTMLAttributes,ReactNode } from "react";

type FlufficButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "alert";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  isLoading?: boolean;
};

const variantConfig = {
  primary:
    "font-semibold bg-primary text-primary-contrast hover:bg-primary-very-dark",
  secondary:
    "font-semibold border border-primary bg-primary-contrast text-primary hover:bg-primary-very-light/60 hover:border-primary-dark",
  tertiary: "bg-transparent text-tertiary/80 hover:text-tertiary-dark",
  alert:
    "font-semibold border border-alert bg-primary-contrast text-alert hover:border-alert-dark hover:text-alert-dark",
};

const sizeConfig = {
  small:
    "px-3 py-1 text-[12px] sm:text-[14px] lg:text-base rounded-2xl [&>svg]:w-4 [&>svg]:-my-2",
  medium:
    "px-5 py-3 text-[15px] sm:text-[16px] lg:text-lg rounded-3xl [&>svg]:w-6 [&>svg]:-my-2",
  large:
    "px-6 py-3 text-lg sm:text-[20px] lg:text-xl rounded-3xl [&>svg]:w-10 [&>svg]:-my-2",
};

const disabledConfig = {
  primary: "bg-primary-light/60",
  secondary:
    "text-secondary-light border-secondary-very-light bg-primary-contrast",
  tertiary: "text-tertiary-light",
  alert: "text-alert-disabled border-alert-disabled",
};

const FlufficButton = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  className,
  isLoading,
  disabled,
  ...rest
}: FlufficButtonProps) => {
  const withIconStyle = `flex items-center justify-center text-nowrap gap-3 ${isLoading && "px-8"}`;
  const sizeStyles =
    variant === "tertiary"
      ? "text-[12px] sm:text-[14px]  px-1"
      : sizeConfig[size];

  return (
    <button
      type="button"
      className={`
    ${variantConfig[variant]}
    ${disabled && !isLoading ? disabledConfig[variant] : ""}
    ${icon && withIconStyle}
    ${sizeStyles}
    ${className || ""}
  `}
      {...rest}
      disabled={disabled || isLoading}
    >
      {!isLoading && icon}
      <span className="relative flex items-center justify-center">
        <span className={isLoading ? "invisible" : ""}>{children}</span>

        {isLoading && (
          <span
            data-testid="button-spinner"
            className="absolute h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent"
          />
        )}
      </span>
    </button>
  );
};

export default FlufficButton;
