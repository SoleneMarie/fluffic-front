import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type FlufficLinkProps = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  className?: string;
};

const FlufficLink = ({ children, href, className }: FlufficLinkProps) => {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        bg-transparent
        px-1
        text-[11px] sm:text-[14px]
        text-tertiary/80
        hover:text-tertiary-dark
        ${className || ""}
      `}
    >
      {children}
    </Link>
  );
};

export default FlufficLink;
