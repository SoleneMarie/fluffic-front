import SectionTitle from "@/components/titles/SectionTitle";
import ProgressBar from "@/components/indicators/ProgressBar";
import CompatibilityIndicator from "@/components/indicators/CompatibilityIndicator";

const IndicatorExamples = () => {
  return (
    <div className="flex flex-col justify-content gap-4">
      <SectionTitle>Barres de progression</SectionTitle>

      <div className="flex flex-wrap gap-6 items-center pb-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs mb-1 text-secondary-very-dark">65%</p>
          <div className="w-38">
            <ProgressBar value={65} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-xs mb-1 text-secondary-very-dark">80%</p>
          <div className="w-38">
            <ProgressBar value={80} color="tertiary" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-xs mb-1 text-secondary-very-dark">46%</p>
          <div className="w-28">
            <ProgressBar value={46} size="small" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-xs mb-1 text-secondary-very-dark">76%</p>
          <div className="w-28">
            <ProgressBar value={76} color="quaternary" size="small" />
          </div>
        </div>
      </div>

      <SectionTitle> Indicateur de compatibilité</SectionTitle>

      <div className="flex flex-wrap gap-x-8 gap-y-4 items-center pb-4">
        <CompatibilityIndicator size="small" />

        <div className="w-72">
          <CompatibilityIndicator value={60} />
        </div>

        <div className="w-60">
          <CompatibilityIndicator value={60} size="small" />
        </div>

        <div className="w-84">
          <CompatibilityIndicator />
        </div>
      </div>
    </div>
  );
};

export default IndicatorExamples;
