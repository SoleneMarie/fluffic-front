import PawIcon from "../icons/PawIcon";

type FlufficTitleProps = {
  size?: "small" | "medium" | "large";
};

const sizeConfig = {
  small: {
    container: "flex items-baseline",
    paw: "w-8 md:w-10",
    strokeWidth: 6,
    text: "-translate-y-0.5 text-[30px] md:text-4xl",
  },
  medium: {
    container: "flex items-baseline justify-center",
    paw: "w-22 md:w-30",
    strokeWidth: 4,
    text: "-translate-y-2 text-[54px] md:text-[72px]",
  },
  large: {
    container: "flex flex-col-reverse items-center",
    paw: "w-36 md:w-44",
    strokeWidth: 3,
    text: "-my-6 text-[84px] md:text-[100px]",
  },
};

const FlufficTitle = ({ size = "small" }: FlufficTitleProps) => {
  const config = sizeConfig[size];

  return (
    <div className={`${config.container} text-primary`}>
      <PawIcon strokeWidth={config.strokeWidth} className={config.paw} />

      <span className={`font-logo font-bold tracking-[0.05em] ${config.text}`}>
        Fluffic
      </span>
    </div>
  );
};

export default FlufficTitle;
