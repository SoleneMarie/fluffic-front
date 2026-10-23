import PinIcon from "@/components/icons/PinIcon";

type PinCityProps = {
  city: string;
};

const PinCity = ({ city }: PinCityProps) => {
  return (
    <div className="flex items-center gap-1 text-secondary-very-dark">
      <PinIcon className={"w-5.5 -ml-1"} strokeWidth={2} />
      <p className="text-[13px] @min-[400px]:text-sm font-medium">{city}</p>
    </div>
  );
};

export default PinCity;
