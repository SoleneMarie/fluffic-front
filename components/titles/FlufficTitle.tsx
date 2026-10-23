import Link from "next/link";

import PawIcon from "../icons/PawIcon";

type FlufficTitleProps = {
  size?: "small" | "medium" | "large";
  link?: string;
};

const sizeConfig = {
  small: {
    container: "flex items-baseline",
    paw: "w-12 md:w-15",
    strokeWidth: 6,
    text: "-translate-y-0.5 text-4xl md:text-5xl",
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

const FlufficTitle = ({ size = "small", link }: FlufficTitleProps) => {
  const config = sizeConfig[size];

  const title = (
    <div className={`${config.container} text-primary`}>
      <PawIcon strokeWidth={config.strokeWidth} className={config.paw} />

      <span className={`font-logo font-bold tracking-[0.05em] ${config.text}`}>
        Fluffic
      </span>
    </div>
  );

  if (link) {
    return <Link href={link}>{title}</Link>;
  }

  return title;
};

export default FlufficTitle;
