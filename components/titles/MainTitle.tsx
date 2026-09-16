import { ReactNode } from "react";

type MainTitleProps = {
  titleText: string;
  subtitleText?: string;
  icon?: ReactNode;
};

const MainTitle = ({ titleText, subtitleText, icon }: MainTitleProps) => {
  return (
    <div>
      <div className="flex items-baseline gap-2 md:gap-3">
        <h1 className="font-handwritten text-secondary text-[22px] -mb-1.5 md:text-3xl font-bold  ">
          {titleText}
        </h1>
        {icon && <span className="relative top-0.5 inline-flex">{icon}</span>}
      </div>

      {subtitleText && (
        <p className="text-tertiary/80 text-xs/5 md:text-sm/6 font-medium">
          {subtitleText}
        </p>
      )}
    </div>
  );
};

export default MainTitle;
