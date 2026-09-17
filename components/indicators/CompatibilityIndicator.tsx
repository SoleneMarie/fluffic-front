import SparkleIcon from "@/components/icons/SparkleIcon";
import ProgressBar from "@/components/indicators/ProgressBar";
import Link from "next/link";

type CompatibilityIndicatorProps = {
  value?: number;
  size?: "small" | "medium";
  className?: string;
};

const QUESTIONNAIRE_HREF = "/";

const CompatibilityIndicator = ({
  value,
  size = "medium",
  className,
}: CompatibilityIndicatorProps) => {
  const hasCompatibility = value !== undefined;

  return (
    <div
      className={`flex items-center text-compatibility gap-2 ${className ?? ""}`}
    >
      <SparkleIcon className={"w-5 mb-0.5"} strokeWidth={1} />

      {hasCompatibility ? (
        <>
          <span className="shrink-0 text-nowrap text-[12px]">
            Compatible à{" "}
            <strong className="text-[14px] font-semibold">{value}%</strong>
          </span>

          <div className="min-w-0 flex-1">
            <ProgressBar value={value} size={size} color="compatibility" />
          </div>
        </>
      ) : size === "medium" ? (
        <span className="text-nowrap text-[12px]">
          Faites le{" "}
          <Link href={QUESTIONNAIRE_HREF} target="_blank" className="font-bold hover:underline">
            questionnaire
          </Link>{" "}
          et découvrez vos matchs !
        </span>
      ) : (
        <Link
          href={QUESTIONNAIRE_HREF}
          target="_blank"
          className="text-nowrap text-[12px] font-semibold hover:underline"
        >
          Découvrez votre compatibilité
        </Link>
      )}
    </div>
  );
};

export default CompatibilityIndicator;
