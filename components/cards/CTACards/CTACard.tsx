import { ReactNode } from "react";
import Image from "next/image";
import FlufficButton from "../../buttons/FlufficButton";
import TimeIcon from "../../icons/TimeIcon";

type CTACardProps = {
  title: ReactNode;
  description: string;
  illustration: string;
  buttonLabel: string;
  onClick: () => void;
  footer?: ReactNode;
};

const CTACard = ({
  title,
  description,
  illustration,
  buttonLabel,
  onClick,
  footer,
}: CTACardProps) => {
  return (
    <div className="@container w-full flex flex-col justify-center border-2 border-separator px-4 py-2 rounded-[10px] min-h-44 @sm:min-h-50 mx-auto">
      <p className="font-semibold text-center text-secondary-very-dark @xs:text-lg @sm:text-xl @md:text-2xl @lg:text-[26px] mb-1 @xs:mb-2">
        {title}
      </p>

      <p className="text-secondary-very-dark text-[13px]/4.5 text-center font-medium @sm:text-[14px]/5 @md:text-[15px]/5 @lg:text-[16px]/5">
        {description}
      </p>

      <div className="w-full flex items-center justify-center gap-2.5 @sm:gap-6 @md:gap-10 -mb-1">
        <Image
          src={illustration}
          alt="illustration"
          width={200}
          height={200}
          className="w-32 @xs:w-44 @sm:w-52 @md:w-60 h-auto"
        />

        <div className="flex flex-col items-center justify-center gap-2">
          <FlufficButton onClick={onClick}>{buttonLabel}</FlufficButton>

          {footer ? (
            footer
          ) : (
            <p className="flex justify-center items-center gap-1 text-tertiary">
              <TimeIcon
                className="w-5 @xs:w-6 @sm:w-7 @md:w-8"
                strokeWidth={1.5}
              />

              <span className="text-tertiary/80 font-medium text-[12px] @xs:text-sm @md:text-[15px]">
                2 minutes
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTACard;
