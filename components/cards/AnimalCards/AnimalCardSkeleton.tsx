import { HTMLAttributes } from "react";

type AnimalCardSkeletonProps = {
  size: "small" | "medium";
} & HTMLAttributes<HTMLDivElement>;

const AnimalCardSkeleton = ({
  size,
  className,
  ...rest
}: AnimalCardSkeletonProps) => {
  return (
    <div
      className={`@container w-full h-full ${className || ""}`}
      aria-hidden="true"
      {...rest}
    >
      <div className="border-2 @min-[200px]:border-2.5 @min-[300px]:border-3 border-separator w-full h-full flex flex-col p-2 @min-[200px]:p-2.5 @min-[300px]:p-4 rounded-[10px]">
        {/* Image */}
        <div
          className={`w-full rounded-lg bg-gray-200 animate-pulse ${
            size === "small" ? "aspect-3/2" : "aspect-5/3 mb-1"
          }`}
        />

        {/* Informations principales */}
        <div className="flex flex-col gap-2 mt-3">
          {/* Nom */}
          <div className="h-5 w-2/3 rounded bg-gray-200 animate-pulse" />

          {/* Espèce, âge, genre et ville */}
          <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
        </div>

        {size === "medium" && (
          <>
            {/* Tags */}
            <div className="flex gap-1.5 mt-2" data-testId="tags">
              <div className="h-6 w-16 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-6 w-20 rounded-full bg-gray-200 animate-pulse" />
              <div className="h-6 w-14 rounded-full bg-gray-200 animate-pulse" />
            </div>

            {/* Compatibilité */}
            <div className="mt-auto pt-2.5 mb-1" data-testId="compatibility">
              <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
              <div className="h-2 w-full rounded-full bg-gray-200 animate-pulse mt-2" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnimalCardSkeleton;
