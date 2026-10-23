import FemaleIcon from "@/components/icons/FemaleIcon";
import MaleIcon from "@/components/icons/MaleIcon";

import PinCity from "../components/PinCity";

export type AnimalMainInfosProps = {
  size: "small" | "medium";
  name: string;
  specie: string;
  age: string;
  gender: "M" | "F";
  city?: string;
};

const AnimalMainInfos = ({
  size = "medium",
  name,
  specie,
  age,
  gender,
  city,
}: AnimalMainInfosProps) => {
  const isSmall = size === "small";

  return (
    <>
      <div
        className={`flex justify-between items-center ${
          isSmall ? "flex-col mt-1" : ""
        }`}
      >
        <div
          className={`flex gap-2 items-center ${
            isSmall ? "justify-between w-full" : ""
          }`}
        >
          <p
            className={`font-handwritten font-bold text-secondary-very-dark ${
              isSmall
                ? "text-[14px] @min-[180px]:text-base"
                : "text-base @min-[400px]:text-lg"
            }`}
          >
            {name}
          </p>

          {gender === "M" ? (
            <MaleIcon
              className={
                isSmall
                  ? "w-6 @min-[180px]:w-7 mb-2"
                  : "w-7 @min-[400px]:w-8 mb-2.5"
              }
              strokeWidth={2}
            />
          ) : (
            <FemaleIcon
              className={
                isSmall
                  ? "w-6.5 @min-[180px]:w-7.5 mb-2 -mr-1.25"
                  : "w-7.5 @min-[400px]:w-8.5 mb-3 -mr-2.5"
              }
              strokeWidth={2}
            />
          )}
        </div>

        <div className={isSmall ? "w-full -mt-1" : "max-w-[90%]"}>
          <p
            className={`text-tertiary/80 font-semibold ${
              isSmall
                ? "text-[11px] @min-[180px]:text-[12px] @min-[220px]:text-[13px]"
                : "text-xs @min-[400px]:text-[15px] text-right mb-1"
            }`}
          >
            <span className="whitespace-nowrap">{specie}</span>
            {" • "}
            <span className="whitespace-nowrap">{age}</span>
          </p>
        </div>
      </div>

      {city && size === "medium" && <PinCity city={city} />}
    </>
  );
};

export default AnimalMainInfos;
