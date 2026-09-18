import { ReactNode, ButtonHTMLAttributes } from "react";

type FlufficButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "alert";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
};

const variantConfig = {
  primary:
    "font-semibold bg-primary text-primary-contrast hover:bg-primary-very-dark disabled:bg-primary-light/60",
  secondary:
    "font-semibold border border-primary bg-primary-contrast text-primary hover:bg-primary-very-light/60 hover:border-primary-dark disabled:text-secondary-light disabled:border-secondary-very-light disabled:bg-primary-contrast",
  tertiary:
    "bg-transparent text-tertiary/80 hover:text-tertiary-dark disabled:text-tertiary-light",
  alert:
    "font-semibold border border-alert bg-primary-contrast text-alert hover:border-alert-dark hover:text-alert-dark disabled:text-alert-disabled disabled:border-alert-disabled",
};

const sizeConfig = {
  small:
    "px-3 py-1 text-[12px] sm:text-[14px] lg:text-base rounded-[18px] [&>svg]:w-4 [&>svg]:-my-2",
  medium:
    "px-5 py-3 text-[15px] sm:text-[16px] lg:text-lg rounded-[20px] [&>svg]:w-6 [&>svg]:-my-2",
  large: `px-6 py-3 text-lg sm:text-[20px] lg:text-xl rounded-[24px] [&>svg]:w-10 [&>svg]:-my-2`,
};

const FlufficButton = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  className,
  ...rest
}: FlufficButtonProps) => {
  const withIconStyle = "flex items-center justify-center text-nowrap gap-3";
  const sizeStyles =
    variant === "tertiary"
      ? "text-[12px] sm:text-[14px]  px-1"
      : sizeConfig[size];

  return (
    <button
      {...rest}
      type="button"
      className={`
        ${variantConfig[variant]}
        ${icon && withIconStyle}
        ${sizeStyles}
        ${className || ""}
      `}
    >
      {icon}
      {children}
    </button>
  );
};

export default FlufficButton;
