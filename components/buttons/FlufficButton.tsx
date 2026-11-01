import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

type FlufficButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: ComponentProps<typeof Link>["href"];
  variant?: "primary" | "secondary" | "tertiary" | "alert";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  isLoading?: boolean;
  contentAlignment?: "center" | "start";
};

const variantConfig = {
  primary:
    "font-semibold border border-transparent bg-primary text-primary-contrast enabled:hover:bg-primary-very-dark",
  secondary:
    "font-semibold border border-primary bg-primary-contrast text-primary enabled:hover:bg-primary-very-light/60 enabled:hover:border-primary-dark",
  tertiary: "bg-transparent text-tertiary/80 enabled:hover:text-tertiary-dark",
  alert:
    "font-semibold border border-alert bg-primary-contrast text-alert enabled:hover:border-alert-dark enabled:hover:text-alert-dark",
};

const sizeConfig = {
  small:
    "px-3 py-1 text-[12px] sm:text-[14px] lg:text-base rounded-2xl [&>svg]:w-4 [&>svg]:-my-2",
  medium:
    "px-5 py-3 text-[15px] sm:text-[16px] lg:text-lg rounded-3xl [&>svg]:w-6 [&>svg]:-my-2",
  large:
    "px-6 py-4 text-lg sm:text-[20px] lg:text-xl rounded-3xl [&>svg]:w-10 [&>svg]:-my-2",
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
  href,
  variant = "primary",
  size = "medium",
  icon,
  className,
  isLoading = false,
  disabled = false,
  contentAlignment = "center",
  ...rest
}: FlufficButtonProps) => {
  const alignmentStyles =
    contentAlignment === "start" ? "justify-start" : "justify-center";

  const withIconStyle = `flex items-center text-nowrap gap-3 ${alignmentStyles}`;

  const sizeStyles =
    variant === "tertiary"
      ? "text-[12px] sm:text-[14px] px-1"
      : sizeConfig[size];

  const isDisabled = disabled || isLoading;

  const buttonStyles = `
    inline-flex items-center
    ${variantConfig[variant]}
    ${isDisabled ? disabledConfig[variant] : ""}
    ${icon ? withIconStyle : "justify-center"}
    ${sizeStyles}
    ${className || ""}
  `;

  const content = (
    <>
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
    </>
  );

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={`
          ${buttonStyles}
          ${isDisabled ? "pointer-events-none" : ""}
        `}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonStyles}
      {...rest}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default FlufficButton;
